const http = require("http");
const express = require("express");
const { Server: SocketServer } = require("socket.io");
const os = require("os");
const path = require("path");
const cors = require("cors");
const pty = require("node-pty");
const fs = require("fs/promises");
const chokidar = require("chokidar");



const shell =
  os.platform() === "win32"
    ? "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"
    : "/bin/bash";



const USER_DIR = path.join(__dirname, "User");


const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json()); // 🔥 important

const io = new SocketServer(server, {
  cors: { origin: "*" },
});



io.on("connection", (socket) => {
  console.log("🔌 Client connected");

  const ptyProcess = pty.spawn(shell, [], {
    name: "xterm-color",
    cols: 80,
    rows: 30,
    cwd: USER_DIR,
    env: process.env,
  });


  ptyProcess.onData((data) => {
    socket.emit("terminal:data", data);
  });

  
  socket.on("terminal:write", (data) => {
    ptyProcess.write(data);
  });

  
  socket.on("file:change", async ({ path: filePath, content }) => {
  try {
    
    const safePath = filePath.replace(/^\/+/, "");

    const fullPath = path.join(USER_DIR, safePath);

    await fs.writeFile(fullPath, content, "utf-8");

    socket.emit("file:saved", safePath);
  } catch (err) {
    console.error("Save error:", err);
  }
});


  socket.on("disconnect", () => {
    ptyProcess.kill();
    console.log("❌ Client disconnected");
  });
});



app.get("/files", async (req, res) => {
  try {
    const tree = await generateFileTree(USER_DIR);
    res.json({ tree });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get("/file", async (req, res) => {
  const relativePath = req.query.path;
  if (!relativePath) return res.status(400).json({ error: "Path required" });

  try {
    const fullPath = path.join(USER_DIR, relativePath);
    const content = await fs.readFile(fullPath, "utf-8");
    res.json({ content });
  } catch {
    res.status(500).json({ error: "Cannot read file" });
  }
});



const watcher = chokidar.watch(USER_DIR, {
  ignoreInitial: true,
  depth: 5,
});

let refreshTimeout;

watcher.on("all", () => {
  clearTimeout(refreshTimeout);
  refreshTimeout = setTimeout(() => {
    io.emit("file:refresh");
  }, 200);
});




async function generateFileTree(directory, maxDepth = 5) {
  const tree = {};
  const IGNORE = ["node_modules", ".git"];

  async function walk(dir, node, depth) {
    if (depth > maxDepth) return;

    const files = await fs.readdir(dir);
    for (const file of files) {
      if (IGNORE.includes(file)) continue;

      const fullPath = path.join(dir, file);
      const stat = await fs.stat(fullPath);

      if (stat.isDirectory()) {
        node[file] = {};
        await walk(fullPath, node[file], depth + 1);
      } else {
        node[file] = null;
      }
    }
  }

  await walk(directory, tree, 0);
  return tree;
}



server.listen(9000, () => {
  console.log("🖥 Backend running at http://localhost:9000");
  console.log("📁 Project root:", USER_DIR);
});

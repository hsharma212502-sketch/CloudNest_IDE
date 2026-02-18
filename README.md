<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CloudNest IDE - README</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
      background: #f9fafb;
      color: #1f2937;
      padding: 40px;
      max-width: 900px;
      margin: auto;
    }
    h1, h2, h3 {
      color: #111827;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 6px;
    }
    code, pre {
      background: #111827;
      color: #f9fafb;
      padding: 12px;
      border-radius: 6px;
      display: block;
      overflow-x: auto;
      margin: 12px 0;
    }
    ul {
      margin-left: 20px;
    }
    li {
      margin-bottom: 8px;
    }
    .badge {
      display: inline-block;
      background: #2563eb;
      color: #fff;
      padding: 4px 10px;
      border-radius: 14px;
      font-size: 12px;
      margin-right: 6px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
    }
    th, td {
      border: 1px solid #e5e7eb;
      padding: 10px;
      text-align: left;
    }
    th {
      background: #f3f4f6;
    }
    footer {
      margin-top: 40px;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <h1>🚀 CloudNest IDE</h1>
  <span class="badge">React</span>
  <span class="badge">Node.js</span>
  <span class="badge">Socket.IO</span>
  <span class="badge">Cloud IDE</span>

  <h2>📖 Overview</h2>
  <p>
    <strong>CloudNest IDE</strong> is a browser-based development environment that brings together a
    file tree explorer, code editor, and integrated terminal in a single, seamless interface —
    <strong>no local setup required</strong>.
  </p>
  <p>
    Built with <strong>React</strong> on the frontend and <strong>Node.js + Socket.IO</strong> on the backend,
    it delivers real-time interaction powered by a pseudo-terminal (<code>node-pty</code>).
  </p>
  <p>
    Ideal for learning, remote development, and lightweight cloud IDE experimentation.
  </p>

  <h2>✨ Features</h2>
  <table>
    <tr>
      <th>Feature</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>📁 File Tree Explorer</td>
      <td>Browse and navigate project files and folders with a clean, structured UI</td>
    </tr>
    <tr>
      <td>📝 Code Editor</td>
      <td>Edit files in real-time with a syntax-friendly editing experience</td>
    </tr>
    <tr>
      <td>💻 Integrated Terminal</td>
      <td>Execute shell commands from the browser via Node.js pseudo-terminal</td>
    </tr>
    <tr>
      <td>🌐 Web-based</td>
      <td>No local IDE installation needed — accessible from any browser</td>
    </tr>
    <tr>
      <td>⚡ Real-time Communication</td>
      <td>Low-latency interaction powered by Socket.IO WebSockets</td>
    </tr>
  </table>

  <h2>🛠️ Tech Stack</h2>

  <h3>Frontend</h3>
  <ul>
    <li><strong>React.js</strong> — UI framework</li>
    <li><strong>Vite</strong> — Fast development server & bundler</li>
    <li><strong>CSS</strong> — Custom styling</li>
  </ul>

  <h3>Backend</h3>
  <ul>
    <li><strong>Node.js</strong> — Runtime</li>
    <li><strong>Express.js</strong> — HTTP server</li>
    <li><strong>Socket.IO</strong> — Real-time WebSocket communication</li>
    <li><strong>node-pty</strong> — Browser-based pseudo-terminal</li>
  </ul>

  <h2>📂 Project Structure</h2>
  <pre>
CloudNest-IDE/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FileTree.jsx
│   │   │   ├── Editor.jsx
│   │   │   └── Terminal.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── index.js
│   ├── pty.js
│   └── package.json
│
└── README.md
  </pre>

  <h2>⚙️ Installation & Setup</h2>

  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js v18+</li>
    <li>npm v8+</li>
  </ul>

  <h3>1️⃣ Clone the Repository</h3>
  <pre>
git clone https://github.com/your-username/cloudnest-ide.git
cd cloudnest-ide
  </pre>

  <h3>2️⃣ Install Dependencies</h3>
  <pre>
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
  </pre>

  <h3>3️⃣ Run the Project</h3>
  <pre>
# Start backend
npm start

# Start frontend
npm run dev
  </pre>

  <p>Open your browser at → <strong>http://localhost:5173</strong></p>

  <h2>🔒 Security Notes</h2>
  <ul>
    <li>Terminal commands execute on the host system — use only in controlled environments</li>
    <li>For production, use Docker containers for isolation</li>
    <li>Do not expose publicly without authentication and rate limiting</li>
  </ul>

  <h2>🚀 Roadmap</h2>
  <ul>
    <li>🔐 User authentication & session management</li>
    <li>🐳 Docker-based isolated execution environments</li>
    <li>🌍 Multi-user real-time collaboration</li>
    <li>💾 Cloud storage integration (S3 / GCS)</li>
    <li>🎨 Editor theme customization (Light/Dark)</li>
    <li>📦 Language-specific syntax highlighting</li>
  </ul>

  <h2>🤝 Contributing</h2>
  <p>
    Contributions are welcome and appreciated!  
    Feel free to fork the repository and submit a pull request.
  </p>

  <footer>
    <p>© 2026 CloudNest IDE • Built by Harshit Sharma</p>
  </footer>

</body>
</html>

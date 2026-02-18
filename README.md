<h1>🚀 CloudNest IDE</h1>

<p><strong>React • Node.js • Socket.IO • Cloud IDE</strong></p>

<hr/>

<h2>📖 Overview</h2>

<p>
  <strong>CloudNest IDE</strong> is a browser-based development environment that brings together
  a file tree explorer, code editor, and integrated terminal in a single, seamless interface —
  <strong>no local setup required</strong>.
</p>

<p>
  Built with <strong>React</strong> on the frontend and
  <strong>Node.js + Socket.IO</strong> on the backend, it delivers real-time interaction powered
  by a pseudo-terminal (<code>node-pty</code>).
</p>

<p>
  Ideal for learning, remote development, and lightweight cloud IDE experimentation.
</p>

<hr/>

<h2>✨ Features</h2>

<table>
  <thead>
    <tr>
      <th align="left">Feature</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
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
      <td>Low-latency WebSocket communication using Socket.IO</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>🛠️ Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li>React.js — UI framework</li>
  <li>Vite — Fast dev server & bundler</li>
  <li>CSS — Custom styling</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Node.js — Runtime</li>
  <li>Express.js — HTTP server</li>
  <li>Socket.IO — Real-time WebSocket communication</li>
  <li>node-pty — Pseudo-terminal for browser-based shell</li>
</ul>

<hr/>

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

<hr/>

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
node index

# Start frontend
npm run dev
</pre>

<p>
  Open your browser at → <strong>http://localhost:5173</strong>
</p>

<hr/>

<h2>🔒 Security Notes</h2>

<ul>
  <li>Terminal commands are executed in the host environment — use only in controlled setups</li>
  <li>For production, use Docker containers for isolation</li>
  <li>Avoid public exposure without authentication and rate limiting</li>
</ul>

<hr/>

<h2>🚀 Roadmap</h2>

<ul>
  <li>🔐 User authentication & session management</li>
  <li>🐳 Docker-based isolated execution environments</li>
  <li>🌍 Multi-user real-time collaboration</li>
  <li>💾 Cloud storage integration (S3 / GCS)</li>
  <li>🎨 Editor theme customization (light / dark)</li>
  <li>📦 Language-specific syntax highlighting</li>
</ul>

<hr/>

<h2>🤝 Contributing</h2>

<p>
  Contributions are welcome and appreciated!
  Feel free to fork the repository and submit a pull request.
</p>

<hr/>

<h2>👤 Author</h2>

<p><strong>Harshit Sharma</strong></p>

<hr/>



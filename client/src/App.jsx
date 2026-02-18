import { useState, useEffect } from "react";
import "./App.css";
import Terminal from "./components/terminal";
import FileTree from "./components/Tree";
import "@xterm/xterm/css/xterm.css";
import socket from "./socket";
import AceEditor from "react-ace";


import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function App() {
  const [fileTree, setFileTree] = useState({});
  const [code, setCode] = useState("");
  const [activePath, setActivePath] = useState("");
  const [isFileOpen, setIsFileOpen] = useState(false);

 

  const getFileTree = async () => {
    try {
      const response = await fetch("http://localhost:9000/files");
      const result = await response.json();
      setFileTree(result.tree);
    } catch (err) {
      console.error("Failed to fetch file tree:", err);
    }
  };

  useEffect(() => {
    getFileTree();
  }, []);

  useEffect(() => {
    socket.on("file:refresh", getFileTree);
    return () => socket.off("file:refresh", getFileTree);
  }, []);

 

  const onSelect = async (path, isDir) => {
    setActivePath(path);

 
    if (isDir) {
      setIsFileOpen(false);
      setCode("");
      return;
    }

  
    try {
      const res = await fetch(
        `http://localhost:9000/file?path=${encodeURIComponent(path)}`
      );
      const data = await res.json();
      setCode(data.content || "");
      setIsFileOpen(true);
    } catch (err) {
      console.error("Failed to open file:", err);
    }
  };

 
  useEffect(() => {
    if (!isFileOpen || !activePath) return;

    const timer = setTimeout(() => {
      socket.emit("file:change", {
        path: activePath,
        content: code,
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [code, activePath, isFileOpen]);

  return (
    <div className="playground-container">
      
      <div className="files">
        <FileTree tree={fileTree} onSelect={onSelect} activePath={activePath} />
      </div>

   
      <div className="right-pane">
       
        <div className="editor-container">
          <div className="editor-path">
            {activePath
              ? activePath.replace(/^\//, "").split("/").join(" > ")
              : "No file selected"}
          </div>

          <AceEditor
            mode="javascript"
            theme="github"
            value={code}
            onChange={setCode}
            name="code-editor"
            width="100%"
            height="100%"
            fontSize={14}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>

       
        <div className="terminal-container">
          <Terminal />
        </div>
      </div>
    </div>
  );
}

export default App;

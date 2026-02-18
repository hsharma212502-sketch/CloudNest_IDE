import { Terminal as XTerminal } from "@xterm/xterm";
import { useEffect, useRef } from "react";
import socket from "../socket";
import "@xterm/xterm/css/xterm.css";

const Terminal = () => {
  const terminalRef = useRef(null);
  const termRef = useRef(null);

  useEffect(() => {
    
    const term = new XTerminal({
      rows: 20,
      cursorBlink: true,
    });

    term.open(terminalRef.current);
    termRef.current = term;

   
    term.onData((data) => {
      socket.emit("terminal:write", data);
    });

 
    const onTerminalData = (data) => {
      term.write(data);
    };

    socket.on("terminal:data", onTerminalData);

    
    return () => {
      socket.off("terminal:data", onTerminalData);
      term.dispose();
    };
  }, []);

  return <div ref={terminalRef} id="terminal" />;
};

export default Terminal;

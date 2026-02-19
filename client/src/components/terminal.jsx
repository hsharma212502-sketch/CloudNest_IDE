import { Terminal as XTerminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { useEffect, useRef } from "react";
import socket from "../socket";
import "@xterm/xterm/css/xterm.css";

const Terminal = () => {
  const terminalRef = useRef(null);
  const termRef = useRef(null);
  const fitAddonRef = useRef(null);

  useEffect(() => {
    const term = new XTerminal({
      cursorBlink: true,
      fontSize: 14,
      scrollback: 1000,
      theme: {
        background: "#111111",
      },
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    term.open(terminalRef.current);
    fitAddon.fit();

    termRef.current = term;
    fitAddonRef.current = fitAddon;

    
    term.onData((data) => {
      socket.emit("terminal:write", data);
    });

  
    const onTerminalData = (data) => {
      term.write(data);
    };

    socket.on("terminal:data", onTerminalData);

    
    const resizeTerminal = () => {
      fitAddon.fit();
      const { cols, rows } = term;
      socket.emit("terminal:resize", { cols, rows });
    };

    window.addEventListener("resize", resizeTerminal);

    
    resizeTerminal();

    return () => {
      window.removeEventListener("resize", resizeTerminal);
      socket.off("terminal:data", onTerminalData);
      term.dispose();
    };
  }, []);

  return (
    <div
      id="terminal"
      ref={terminalRef}
      style={{
        width: "100%",
        height: "100%",
        background: "#111",
      }}
    />
  );
};

export default Terminal;

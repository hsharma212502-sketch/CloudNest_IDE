const FileTreeNode = ({ filename, nodes, path, onSelect }) => {
  const isDir = nodes !== null;

  const handleClick = (e) => {
    e.stopPropagation();
    
    onSelect(path, isDir);
  };

  return (
    <div style={{ marginLeft: "20px" }} onClick={handleClick}>
      <span>
        {isDir ? "📁" : "📄"} {filename}
      </span>

      {isDir && (
        <ul style={{ listStyle: "none", paddingLeft: "16px" }}>
          {Object.keys(nodes).map((child) => (
            <li key={child}>
              <FileTreeNode
                filename={child}
                nodes={nodes[child]}
                path={`${path}/${child}`}
                onSelect={onSelect}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const FileTree = ({ tree, onSelect }) => {
  return (
    <FileTreeNode
      filename="/"
      nodes={tree}
      path=""
      onSelect={onSelect}
    />
  );
};

export default FileTree;

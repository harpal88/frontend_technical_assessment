import { useState } from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  // State for nodes and edges
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  return (
    <div>
      <PipelineToolbar />
      <PipelineUI nodes={nodes} setNodes={setNodes} edges={edges} setEdges={setEdges} />
      <SubmitButton nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;

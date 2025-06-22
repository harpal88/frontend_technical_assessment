// src/nodes/delayNode.jsx
import { useState } from 'react';
import { Position } from 'reactflow';
import { NodeBase } from './common/NodeBase';

export const DelayNode = ({ id, data }) => {
  const [ms, setMs] = useState(data?.ms || '1000');

  const controls = [
    {
      type: 'text',
      label: 'Delay (ms)',
      value: ms,
      onChange: (e) => setMs(e.target.value),
    },
  ];

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-in` },
    { type: 'source', position: Position.Right, id: `${id}-out` },
  ];

  return <NodeBase title="Delay Node" controls={controls} handles={handles} />;
};

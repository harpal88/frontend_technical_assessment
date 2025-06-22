// src/nodes/switchNode.jsx
import { useState } from 'react';
import { Position } from 'reactflow';
import { NodeBase } from './common/NodeBase';

export const SwitchNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'true');

  const controls = [
    {
      type: 'text',
      label: 'Condition',
      value: condition,
      onChange: (e) => setCondition(e.target.value),
    },
  ];

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input` },
    { type: 'source', position: Position.Right, id: `${id}-true` },
    { type: 'source', position: Position.Right, id: `${id}-false`, style: { top: '80%' } },
  ];

  return <NodeBase title="Switch Node" controls={controls} handles={handles} />;
};

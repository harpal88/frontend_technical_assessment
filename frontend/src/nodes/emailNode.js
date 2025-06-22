// src/nodes/emailNode.jsx
import { useState } from 'react';
import { Position } from 'reactflow';
import { NodeBase } from './common/NodeBase';

export const EmailNode = ({ id, data }) => {
  const [email, setEmail] = useState(data?.email || '');

  const controls = [
    {
      type: 'text',
      label: 'Email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
  ];

  const handles = [{ type: 'source', position: Position.Right, id: `${id}-email` }];

  return <NodeBase title="Email Node" controls={controls} handles={handles} />;
};

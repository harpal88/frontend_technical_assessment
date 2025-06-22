// src/nodes/textNode.jsx
import { useState } from 'react';
import { Position } from 'reactflow';
import { NodeBase } from './common/NodeBase';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const controls = [
    {
      type: 'text',
      label: 'Text',
      value: currText,
      onChange: (e) => setCurrText(e.target.value),
    },
  ];

  const handles = [{ type: 'source', position: Position.Right, id: `${id}-output` }];

  return <NodeBase title="Text" controls={controls} handles={handles} />;
};

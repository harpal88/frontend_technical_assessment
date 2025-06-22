// src/nodes/inputNode.jsx
import { useState } from 'react';
import { Position } from 'reactflow';
import { NodeBase } from './common/NodeBase';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const controls = [
    {
      type: 'text',
      label: 'Name',
      value: currName,
      onChange: (e) => setCurrName(e.target.value),
    },
    {
      type: 'select',
      label: 'Type',
      value: inputType,
      onChange: (e) => setInputType(e.target.value),
      options: ['Text', 'File'],
    },
  ];

  const handles = [{ type: 'source', position: Position.Right, id: `${id}-value` }];

  return <NodeBase title="Input" controls={controls} handles={handles} />;
};

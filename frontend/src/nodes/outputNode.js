// src/nodes/outputNode.jsx
import { useState } from 'react';
import { Position } from 'reactflow';
import { NodeBase } from './common/NodeBase';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

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
      value: outputType,
      onChange: (e) => setOutputType(e.target.value),
      options: ['Text', 'Image'],
    },
  ];

  const handles = [{ type: 'target', position: Position.Left, id: `${id}-value` }];

  return <NodeBase title="Output" controls={controls} handles={handles} />;
};

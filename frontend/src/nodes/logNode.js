// src/nodes/logNode.jsx
import { Position } from 'reactflow';
import { NodeBase } from './common/NodeBase';

export const LogNode = ({ id }) => {
  const controls = [
    {
      type: 'text',
      label: 'Log',
      value: 'Debug output',
      onChange: () => {},
    },
  ];

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input` },
  ];

  return <NodeBase title="Log Node" controls={controls} handles={handles} />;
};

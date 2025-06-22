// src/nodes/llmNode.jsx
import { Position } from 'reactflow';
import { NodeBase } from './common/NodeBase';

export const LLMNode = ({ id }) => {
  const controls = [
    {
      type: 'text',
      label: 'LLM Info',
      value: 'This is a LLM.', // placeholder, could become dynamic later
      onChange: () => {},
    },
  ];

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: `${100/3}%` } },
    { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: `${200/3}%` } },
    { type: 'source', position: Position.Right, id: `${id}-response` },
  ];

  return <NodeBase title="LLM" controls={controls} handles={handles} />;
};

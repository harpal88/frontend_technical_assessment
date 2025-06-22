// src/nodes/textNode.jsx
import { useState, useMemo } from 'react';
import { Position } from 'reactflow';
import { NodeBase } from './common/NodeBase';

// Helper to extract unique, valid JS variable names in {{var}} format
function extractVariables(text) {
  // This regex matches {{ variableName }} with optional spaces
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const vars = [];
  let match;
  while ((match = regex.exec(text))) {
    if (!vars.includes(match[1])) {
      vars.push(match[1]);
    }
  }
  return vars;
}

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');

  // Dynamically calculate width and height based on text, with a max width and improved initial width
  const { width, height } = useMemo(() => {
    const lines = currText.split('\n');
    const longestLine = Math.max(...lines.map((line) => line.length), 8);
    const minWidth = 160;
    const maxWidth = 320;
    const baseWidth = currText.length === 0 ? minWidth : Math.max(longestLine * 8 + 48, minWidth);
    const width = Math.min(baseWidth, maxWidth);
    // Set minHeight to fit a single line (about 32px for input + padding)
    const minHeight = 40;
    const height = Math.min(Math.max(lines.length * 24 + 16, minHeight), 300);
    return { width, height };
  }, [currText]);

  // Extract variables for handles (ensure this is called on every render)
  const variables = useMemo(() => extractVariables(currText), [currText]);

  // Handles: right for output, left for each variable
  const handles = [
    ...variables.map((v, idx) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-var-${v}`,
      style: { top: `${60 + idx * 24}px` }, // Stagger handles vertically
    })),
    { type: 'source', position: Position.Right, id: `${id}-output` },
  ];

  const controls = [
    {
      type: 'textarea',
      label: 'Text',
      value: currText,
      onChange: (e) => setCurrText(e.target.value),
    },
  ];

  return (
    <NodeBase
      title="Text"
      controls={controls}
      handles={handles}
      style={{ width, minHeight: height, maxWidth: 320 }}
    />
  );
};


// src/nodes/fileUploadNode.jsx
import { useState } from 'react';
import { Position } from 'reactflow';
import { NodeBase } from './common/NodeBase';

export const FileUploadNode = ({ id, data }) => {
  const [fileType, setFileType] = useState(data?.fileType || 'PDF');

  const controls = [
    {
      type: 'select',
      label: 'File Type',
      value: fileType,
      onChange: (e) => setFileType(e.target.value),
      options: ['PDF', 'Image', 'CSV'],
    },
  ];

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-file` }
  ];

  return <NodeBase title="File Upload" controls={controls} handles={handles} />;
};

// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    // Accent background per node type
    const bg =
      type === 'llm'
        ? '#eff6ff'
        : type === 'customInput'
        ? '#ecfdf5'
        : type === 'customOutput'
        ? '#fefce8'
        : type === 'text'
        ? '#f3e8ff'
        : '#ffffff';
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{
          cursor: 'grab',
          minWidth: '80px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '8px',
          background: bg,
          boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
          justifyContent: 'center',
          flexDirection: 'column',
          border: '1px solid #d1d5db'
        }} 
        draggable
      >
          <span style={{ color: '#1f2937', fontWeight: 600, fontSize: '14px', letterSpacing: '0.2px' }}>{label}</span>
      </div>
    );
  };

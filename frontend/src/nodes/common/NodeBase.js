// NodeBase.jsx using Tailwind (needs Tailwind setup in your project)
import { Handle } from 'reactflow';

export const NodeBase = ({ title, controls = [], handles = [] }) => {
  // Accent background per node type
  const bg =
    title === 'LLM'
      ? 'bg-blue-50'
      : title === 'Input'
      ? 'bg-green-50'
      : title === 'Output'
      ? 'bg-yellow-50'
      : title === 'Text'
      ? 'bg-purple-50'
      : 'bg-white';

  return (
    <div className={`w-56 ${bg} border border-gray-300 rounded-lg shadow p-4 flex flex-col gap-3`}>
      <div className="text-sm font-semibold text-gray-800 mb-1">{title}</div>

      <div className="flex flex-col gap-2">
        {controls.map((control, i) => {
          if (control.type === 'text') {
            return (
              <label key={i} className="flex flex-col text-xs text-gray-600 gap-1">
                {control.label}
                <input
                  type="text"
                  value={control.value}
                  onChange={control.onChange}
                  className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
              </label>
            );
          }

          if (control.type === 'select') {
            return (
              <label key={i} className="flex flex-col text-xs text-gray-600 gap-1">
                {control.label}
                <select
                  value={control.value}
                  onChange={control.onChange}
                  className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                >
                  {control.options.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
            );
          }

          return null;
        })}
      </div>

      {handles.map(({ type, position, id, style }) => (
        <Handle
          key={id}
          type={type}
          position={position}
          id={id}
          style={{ background: '#3b82f6', width: 8, height: 8, ...style }}
        />
      ))}
    </div>
  );
};

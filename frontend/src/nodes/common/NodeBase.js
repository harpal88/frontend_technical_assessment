// NodeBase.jsx using Tailwind (needs Tailwind setup in your project)
import { Handle } from 'reactflow';

export const NodeBase = ({ title, controls = [], handles = [], style = {} }) => {
  return (
    <div
      className="w-56 min-h-[100px] bg-blue-100 border border-gray-300 rounded-lg p-4 shadow-sm flex flex-col gap-3"
      style={style}
    >
      <div className="font-semibold text-sm">{title}</div>

      <div className="flex flex-col gap-2 text-xs">
        {controls.map((control, i) => {
          if (control.type === 'text') {
            return (
              <label key={i} className="flex flex-col">
                {control.label}
                <input
                  type="text"
                  value={control.value}
                  onChange={control.onChange}
                  className="border border-gray-300 rounded px-2 py-1 text-xs"
                />
              </label>
            );
          }

          if (control.type === 'textarea') {
            return (
              <label key={i} className="flex flex-col">
                {control.label}
                <textarea
                  value={control.value}
                  onChange={control.onChange}
                  className="border border-gray-300 rounded px-2 py-1 text-xs resize-none"
                  rows={3}
                  style={{ minWidth: 0, width: '100%' }}
                />
              </label>
            );
          }

          if (control.type === 'select') {
            return (
              <label key={i} className="flex flex-col">
                {control.label}
                <select
                  value={control.value}
                  onChange={control.onChange}
                  className="border border-gray-300 rounded px-2 py-1 text-xs"
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
        <Handle key={id} type={type} position={position} id={id} style={style} />
      ))}
    </div>
  );
};

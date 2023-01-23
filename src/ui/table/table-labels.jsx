export default function TableLabels({ labels, className = "" }) {
  return (
    <div className={"flex justify-between text-xs bg-gray-300"}>
      {labels.map((label, i) => {
        return (
          <div key={i} className={`flex-1 flex-grow ${className}`}>
            {label}
          </div>
        );
      })}
    </div>
  );
}

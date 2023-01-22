export default function TableLabels({ labels }) {
  return (
    <div className={"flex justify-between text-xs bg-gray-300"}>
      {labels.map((label, i) => {
        return (
          <div key={i} className={"flex-1 flex-grow"}>
            {label}
          </div>
        );
      })}
    </div>
  );
}

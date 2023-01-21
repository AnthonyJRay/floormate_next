export default function TableLabels({ labels }) {
  return (
    <tr className={"text-xs bg-gray-300"}>
      {labels.map((label, i) => {
        return <th key={i}>{label}</th>;
      })}
    </tr>
  );
}

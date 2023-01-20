export default function TableLabels({ labels }) {
  console.log("Inside TableLabels", labels);
  return (
    <tr className={"text-xs"}>
      {labels.map((label, i) => {
        return <th key={i}>{label}</th>;
      })}
    </tr>
  );
}

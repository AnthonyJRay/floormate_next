export default function ExpenseDisplay({ occurredOn, name, purpose, total }) {
  return (
    <>
      <td>{occurredOn}</td>
      <td>{name}</td>
      <td>{purpose}</td>
      <td>{total}</td>
    </>
  );
}

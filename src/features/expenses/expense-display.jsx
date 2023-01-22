export default function ExpenseDisplay({ occurredOn, name, purpose, total }) {
  return (
    <div className={"flex w-full"}>
      <div className={"flex-1 flex-grow"}>{occurredOn}</div>
      <div className={"flex-1 flex-grow"}>{name}</div>
      <div className={"flex-1 flex-grow"}>{purpose}</div>
      <div className={"flex-1 flex-grow"}>{total}</div>
    </div>
  );
}

export default function ExpenseForm({ value, onChange = () => {} }) {
  const { occurredOn, name, purpose, total } = value;
  return (
    <>
      <td>
        <input
          type="text"
          name={"occurredOn"}
          placeholder={"Expense Date"}
          value={occurredOn}
          onChange={(e) => onChange({ ...value, occurredOn: e.target.value })}
        />
      </td>
      <td>
        <input
          type="text"
          name={"name"}
          placeholder={"Expense Name"}
          value={name}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
        />
      </td>
      <td>
        <input
          type="text"
          name={"purpose"}
          placeholder={"Expense Purpose"}
          value={purpose}
          onChange={(e) => onChange({ ...value, purpose: e.target.value })}
        />
      </td>
      <td>
        <input
          type="text"
          name={"total"}
          placeholder={"Expense Total"}
          value={total}
          onChange={(e) => onChange({ ...value, total: e.target.value })}
        />
      </td>
    </>
  );
}

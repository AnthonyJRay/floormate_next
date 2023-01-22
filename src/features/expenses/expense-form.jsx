import NewTextField from "@/ui/form/newtextfield";

export default function ExpenseForm({ value, onChange = () => {} }) {
  const { occurredOn, name, purpose, total } = value;
  return (
    <>
      <div className={"flex-grow"}>
        <NewTextField
          type="text"
          name={"occurredOn"}
          placeholder={"Expense Date"}
          value={occurredOn}
          onChange={(e) => onChange({ ...value, occurredOn: e.target.value })}
        />
      </div>
      <div className={"flex-grow"}>
        <NewTextField
          type="text"
          name={"name"}
          placeholder={"Expense Name"}
          value={name}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
        />
      </div>
      <div className={"flex-grow"}>
        <NewTextField
          type="text"
          name={"purpose"}
          placeholder={"Expense Purpose"}
          value={purpose}
          onChange={(e) => onChange({ ...value, purpose: e.target.value })}
        />
      </div>
      <div className={"flex-grow"}>
        <NewTextField
          type="text"
          name={"total"}
          placeholder={"Expense Total"}
          value={total}
          onChange={(e) => onChange({ ...value, total: e.target.value })}
        />
      </div>
    </>
  );
}

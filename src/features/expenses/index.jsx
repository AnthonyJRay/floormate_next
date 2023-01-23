import ExpenseDisplay from "./expense-display";
import ExpenseForm from "./expense-form";

export default function Expense({
  value,
  onChange = () => {},
  onEdit = () => {},
  onSave = () => {},
  onCancel = () => {},
  onDelete = () => {},
  isEditing = false,
}) {
  return (
    <>
      <div className={"flex"}>
        <div className={"w-full bg-slate-200 rounded"}>
          {isEditing ? (
            <ExpenseForm
              {...{ value }}
              onSave={onSave}
              onCancel={onCancel}
              onChange={onChange}
            />
          ) : (
            <ExpenseDisplay {...value} onEdit={onEdit} onDelete={onDelete} />
          )}
        </div>
      </div>
    </>
  );
}

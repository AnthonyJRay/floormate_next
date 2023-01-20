import ExpenseDisplay from "./expense-display";
import ExpenseForm from "./expense-form";
import { IconButton } from "@/ui/button";

import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

// export { ExpenseDisplay, ExpenseForm };

export default function ExpensesBody({
  value,
  onChange = () => {},
  onEdit = () => {},
  onSave = () => {},
  onCancel = () => {},
  onDelete = () => {},
  isEditing = false,
}) {
  console.log(value);
  return (
    <tr>
      {isEditing ? (
        <ExpenseForm {...{ value }} onChange={onChange} />
      ) : (
        <ExpenseDisplay {...value} />
      )}
      <td>
        <IconButton className="bg-yellow-500 hover:bg-yellow-400">
          <PencilSquareIcon />
        </IconButton>
      </td>
      <td>
        <IconButton className="bg-red-500 hover:bg-red-400">
          <TrashIcon />
        </IconButton>
      </td>
    </tr>
  );
}

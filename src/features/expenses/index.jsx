import ExpenseDisplay from "./expense-display";
import ExpenseForm from "./expense-form";
import { IconButton } from "@/ui/button";

import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";

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
  console.log("Value from expenses", value);
  return (
    <tr className={"bg-gray-200"}>
      {isEditing ? (
        <ExpenseForm {...{ value }} onChange={onChange} />
      ) : (
        <ExpenseDisplay {...value} />
      )}
      {isEditing ? (
        <>
          <td>
            <IconButton
              className="bg-green-600 hover:bg-green-500"
              onClick={() => onSave(value)}
            >
              <CheckIcon />
            </IconButton>
          </td>
          <td>
            <IconButton
              className="bg-red-500 hover:bg-red-400"
              onClick={onCancel}
            >
              <XMarkIcon />
            </IconButton>
          </td>
        </>
      ) : (
        <>
          <td>
            <IconButton
              className="bg-yellow-500 hover:bg-yellow-400"
              onClick={onEdit}
            >
              <PencilSquareIcon />
            </IconButton>
          </td>
          <td>
            <IconButton
              className="bg-red-500 hover:bg-red-400"
              onClick={onDelete}
            >
              <TrashIcon />
            </IconButton>
          </td>
        </>
      )}
    </tr>
  );
}

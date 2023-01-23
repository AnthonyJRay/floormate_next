import ExpenseDisplay from "./expense-display";
import ExpenseForm from "./expense-form";
import { IconButton } from "@/ui/button";

import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function ExpensesBody({
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
        <div className={"w-full bg-gray-200"}>
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
        {/* {isEditing ? (
          <div>
            <div>
              <IconButton
                className="bg-green-600 hover:bg-green-500"
                onClick={() => onSave(value)}
              >
                <CheckIcon />
              </IconButton>
            </div>
            <div>
              <IconButton
                className="bg-red-500 hover:bg-red-400"
                onClick={onCancel}
              >
                <XMarkIcon />
              </IconButton>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <IconButton
                className="bg-yellow-500 hover:bg-yellow-400"
                onClick={onEdit}
              >
                <PencilSquareIcon />
              </IconButton>
            </div>
            <div>
              <IconButton
                className="bg-red-500 hover:bg-red-400"
                onClick={onDelete}
              >
                <TrashIcon />
              </IconButton>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
}

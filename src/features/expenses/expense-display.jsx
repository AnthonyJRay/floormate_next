import { IconButton } from "@/ui/button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function ExpenseDisplay({
  occurredOn,
  name,
  purpose,
  total,
  onEdit,
  onDelete,
}) {
  return (
    <div className={"flex flex-col md:flex-row w-full items-center p-1"}>
      <div className={"flex-1 flex-grow"}>{occurredOn}</div>
      <div className={"flex-1 flex-grow"}>{name}</div>
      <div className={"flex-1 flex-grow"}>{purpose}</div>
      <div className={"flex-1 flex-grow"}>{total}</div>
      <div className="flex flex-1 flex-grow gap-2 justify-center">
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
    </div>
  );
}

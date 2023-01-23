import NewTextField from "@/ui/form/newtextfield";
import { IconButton } from "@/ui/button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function ExpenseForm({
  value,
  onCancel = () => {},
  onSave = () => {},
  onChange = () => {},
}) {
  const { occurredOn, name, purpose, total } = value;
  return (
    <div className={"flex flex-col lg:flex-row p-2 gap-2"}>
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
      <div className={"flex flex-1 flex-grow gap-1 justify-center"}>
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
    </div>
  );
}

import { TrashIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@/ui/button";
import TextField from "@/ui/form/textfield";

export default function LineItem({
  data,
  className,
  onChange = () => {},
  onDelete = () => {},
}) {
  const { name, description, quantity, rate, total } = data;
  return (
    <div className={"flex w-full p-2 gap-2"}>
      <div className={"flex-grow"}>
        <TextField
          className={className}
          placeholder={"Name"}
          name={"name"}
          value={name}
          onChange={onChange}
        />
      </div>
      <div className={"flex-grow"}>
        <TextField
          className={className}
          placeholder={"Description"}
          name={"description"}
          value={description}
          onChange={onChange}
        />
      </div>
      <div className={"flex-grow"}>
        <TextField
          className={className}
          placeholder={"Quantity"}
          name={"quantity"}
          value={quantity}
          onChange={onChange}
        />
      </div>
      <div className={"flex-grow"}>
        <TextField
          className={className}
          placeholder={"Rate"}
          name={"rate"}
          value={rate}
          onChange={onChange}
        />
      </div>
      <div className={"flex-grow"}>
        <div className={"text-green-600"}>${total}</div>
      </div>
      <div className={"flex-grow"}>
        <div>
          <IconButton className="bg-red-600" type={"button"} onClick={onDelete}>
            <TrashIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

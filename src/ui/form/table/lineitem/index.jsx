import { TrashIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@/ui/button";
import TextField from "@/ui/form/textfield";

export default function LineItem({
  data,
  className,
  setValues,
  values,
  onChange = () => {},
  onClick = () => {},
}) {
  const { name, description, quantity, rate, total } = data;

  return (
    <tr className={"text-left"}>
      <td>
        <TextField
          className={className}
          placeholder={"Name"}
          name={"name"}
          value={name}
          onChange={onChange}
        />
      </td>
      <td>
        <TextField
          className={className}
          placeholder={"Description"}
          name={"description"}
          value={description}
          onChange={onChange}
        />
      </td>
      <td>
        <TextField
          className={className}
          placeholder={"Quantity"}
          name={"quantity"}
          value={quantity}
          onChange={onChange}
        />
      </td>
      <td>
        <TextField
          className={className}
          placeholder={"Rate"}
          name={"rate"}
          value={rate}
          onChange={onChange}
        />
      </td>
      <td>
        <span className={"text-green-600"}>${total}</span>
      </td>
      <td>
        <IconButton className="bg-red-600" type={"button"} onClick={onClick}>
          <TrashIcon />
        </IconButton>
      </td>
    </tr>
  );
}

import { TrashIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@/ui/button";
import TextField from "@/ui/form/textfield";
import TextBox from "@/ui/form/textbox";

export default function LineItem({
  data,
  className,
  unitStyles,
  onChange = () => {},
  onClick = () => {},
}) {
  const { name, description, quantity, rate, total } = data;

  return (
    <tr className={"text-left"}>
      <td className={"w-3/12"}>
        <TextField
          className={className}
          placeholder={"Name"}
          name={"name"}
          value={name}
          onChange={onChange}
        />
      </td>
      <td>
        <TextBox
          className={`${className} border-b-2 p-1 h-[40px]`}
          placeholder={"Description"}
          name={"description"}
          value={description}
          onChange={onChange}
        />
      </td>
      <td className={"w-1/12"}>
        <TextField
          className={`${className}`}
          placeholder={"Quantity"}
          name={"quantity"}
          value={quantity}
          onChange={onChange}
        />
      </td>
      <td className={"w-1/12"}>
        <TextField
          className={`${className}`}
          placeholder={"Rate"}
          name={"rate"}
          value={rate}
          onChange={onChange}
        />
      </td>
      <td>
        <span className={"text-green-600 w-2/12"}>${total}</span>
      </td>
      <td>
        <IconButton className="bg-red-600" type={"button"} onClick={onClick}>
          <TrashIcon />
        </IconButton>
      </td>
    </tr>
  );
}

import { TrashIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@/ui/button";
import TextField from "@/ui/form/textfield";

export default function LineItem({ onClick = () => {} }) {
  return (
    <tr className={"text-left"}>
      <td>
        <TextField type="text" placeholder={"Name"} />
      </td>
      <td>
        <TextField type="text" placeholder={"Description"} />
      </td>
      <td>
        <TextField type="text" placeholder={"Quantity"} />
      </td>
      <td>
        <TextField type="text" placeholder={"Rate"} />
      </td>
      <td>
        <span className={"text-green-600"}>$</span>
      </td>
      <td>
        <IconButton className="bg-red-600" type={"button"} onClick={onClick}>
          <TrashIcon />
        </IconButton>
      </td>
    </tr>
  );
}

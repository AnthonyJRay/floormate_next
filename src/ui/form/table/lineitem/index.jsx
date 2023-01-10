import { TrashIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@/ui/button";
import TextField from "@/ui/form/textfield";

export default function LineItem({ onChange = () => {}, onClick = () => {} }) {
  return (
    <tr className={"text-left"}>
      <td>
        <TextField
          type="text"
          placeholder={"Name"}
          name={"name"}
          onChange={onChange}
        />
      </td>
      <td>
        <TextField
          type="text"
          placeholder={"Description"}
          name={"description"}
          onChange={onChange}
        />
      </td>
      <td>
        <TextField
          type="text"
          placeholder={"Quantity"}
          name={"quantity"}
          onChange={onChange}
        />
      </td>
      <td>
        <TextField
          type="text"
          placeholder={"Rate"}
          name={"rate"}
          onChange={onChange}
        />
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

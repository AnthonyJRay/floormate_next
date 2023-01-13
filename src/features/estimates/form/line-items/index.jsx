import LineItem from "@/ui/form/table/lineitem";
import TableLabels from "@/ui/form/table/labels";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TextButton } from "@/ui/button";

export default function LineItems({ values, setValues, defaultValues }) {
  function lineItemsHandler(e, i) {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      lineItems: values.map((item, _i) => {
        return _i === i ? { ...item, [name]: value } : item;
      }),
    }));
  }

  function addItem() {
    const newItem = defaultValues.lineItems;
    setValues((prev) => ({
      ...prev,
      lineItems: [...values, ...newItem],
    }));
  }

  function deleteItem(i) {
    const newLineItems = values.filter((item, _i) => {
      return i !== _i;
    });
    setValues((prev) => ({
      ...prev,
      lineItems: newLineItems,
    }));
  }

  return (
    <div className={"my-8"}>
      <TextButton
        className={"bg-green-600 hover:bg-green-500 my-8"}
        type={"button"}
        onClick={() => addItem()}
      >
        <div className={"flex items-center gap-1"}>
          <PlusCircleIcon className={"text-white w-5"} />
          <div>New Line Item</div>
        </div>
      </TextButton>
      <div className={"flex w-full justify-center"}>
        <table className={"table-auto"}>
          <thead>
            <TableLabels />
          </thead>
          <tbody>
            {values.map((item, i) => {
              return (
                <LineItem
                  key={i}
                  className={"w-full my-2"}
                  unitStyles={"w-1/12"}
                  setValues={setValues}
                  values={values}
                  data={item}
                  onChange={(e) => lineItemsHandler(e, i)}
                  onClick={() => deleteItem(i)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

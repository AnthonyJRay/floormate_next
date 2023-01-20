import { useEffect } from "react";
import LineItem from "@/features/estimates/form/table/lineitem";
import TableLabels from "@/features/estimates/form/table/labels";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TextButton } from "@/ui/button";

export default function LineItems({ values, setValues, defaultValues }) {
  // function estimateTotals(values, setValues, i) {
  //   return useEffect(() => {
  //     setValues((prev) => ({
  //       ...prev,
  //       total: values.map((item, _i) => {
  //         return _i === i ? item.quantity * item.rate : item;
  //       }),
  //       subtotal: values.map((item, _i) => {
  //         return _i === i ? item.quantity * item.rate : item;
  //       }),
  //     }));
  //   }, [values]);
  // }

  function lineItemsHandler(e, i) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      lineItems: values.map((item, _i) => {
        return _i === i
          ? {
              ...item,
              [name]: value,
              // total: qty * rate,
            }
          : item;
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
    const newLineItems = values.filter((_, _i) => {
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
      <div className={"w-full"}>
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
                  data={item}
                  onChange={(e) => lineItemsHandler(e, i)}
                  onDelete={() => deleteItem(i)}
                  // estimateTotals={estimateTotals(values, setValues, i)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

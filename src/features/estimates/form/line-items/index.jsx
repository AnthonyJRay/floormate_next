import { useEffect } from "react";
import LineItem from "@/ui/form/table/lineitem";
import TableLabels from "@/ui/form/table/labels";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TextButton } from "@/ui/button";

export default function LineItems({ values, setValues, defaultValues }) {
  const { lineItems } = values;

  function lineItemsHandler(e, i) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      lineItems: lineItems.map((item, _i) => {
        const { quantity, total, rate } = item;
        return _i === i
          ? {
              ...item,
              [name]: value,
              total: rate * quantity,
            }
          : item;
      }),
    }));
  }

  // function lineItemsTotal(e, i) {
  //   const {value} = e.target
  //   setValues(prev => ({
  //     ...prev,
  //     lineItems: lineItems.map((item, _i) => {
  //       const {quantity, rate, total } = item
  //       return _i === i ? {
  //         ...item,

  //       }
  //     })
  //   }))
  // }

  // useEffect(() => {
  //   setValues((prev) => ({
  //     ...prev,
  //     lineItems: lineItems.map((item, i) => ({
  //       ...item,
  //       total: item.quantity * item.rate,
  //     })),
  //   }));
  // }, [setValues]);

  function addItem() {
    const newItem = defaultValues.lineItems;
    setValues((prev) => ({
      ...prev,
      lineItems: [...lineItems, ...newItem],
    }));
  }

  function deleteItem(i) {
    const newLineItems = lineItems.filter((item, _i) => {
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
        <table className={"table-auto w-full"}>
          <thead>
            <TableLabels />
          </thead>
          <tbody>
            {lineItems.map((item, i) => {
              return (
                <LineItem
                  key={i}
                  className={"w-11/12 my-2"}
                  setValues={setValues}
                  values={lineItems}
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

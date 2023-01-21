import { useEffect } from "react";
import LineItem from "@/features/estimates/form/table/lineitem";
import { TableLabels } from "@/ui/table";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TextButton } from "@/ui/button";

export default function LineItems({ values, setValues, defaultValues }) {
  function lineItemsHandler(e, i) {
    const { name, value } = e.target;
    console.log("Inside lineItemsHandler", values);
    setValues((prev) => ({
      ...prev,
      lineItems: values.map((item, _i) => {
        let qty = name === "quantity" ? value : item.quantity;
        let rate = name === "rate" ? value : item.rate;
        return _i === i
          ? {
              ...item,
              [name]: value,
              total: qty * rate,
            }
          : item;
      }),
    }));
  }

  useEffect(() => {
    console.log("Inside useEffect", values);
    const totals = Object.values(values).map((item) => item.total);
    console.log("Totals array created from values Object values", totals);

    const sum = totals.reduce((acc, currentValue) => {
      acc + currentValue, 0;
    });
    console.log("Sum of all totals", sum);
    // const sum = values.total.reduce((acc, currentValue) => {
    //   acc + currentValue, 0;
    // });
    // console.log("This is the sum of all lineItems", sum);
    setValues((prev) => ({
      ...prev,
      // subtotal:
    }));
  }, [values]);

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
            <TableLabels
              labels={["Name", "Description", "Quantity", "Rate", "Total"]}
            />
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

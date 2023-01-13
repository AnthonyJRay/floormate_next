import Link from "next/Link";
import { TextButton } from "@/ui/button";
import TextField from "@/ui/form/textfield";
import BillTo from "./bill-to";
import LineItems from "./line-items";
import Summary from "./summary";
import Notes from "./notes";

export default function EstimateForm({ values, setValues, defaultValues }) {
  const { estimateDate, estimateNO, subtotal, total, tax } = values;

  function inputHandler(e) {
    const { value, name } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form className={"bg-gray-100"}>
      <div className={"flex flex-col p-2"}>
        {/*w-full on larget screens? */}
        <div className="flex justify-between italic">
          <div>Estimate: #{estimateNO}</div>
          <div>Date: {estimateDate}</div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 py-4">
          <BillTo values={values} setValues={setValues} />
          <Summary values={values} setValues={setValues} />
        </div>
        <LineItems
          values={values.lineItems}
          setValues={setValues}
          defaultValues={defaultValues}
        />
        <Notes values={values} setValues={setValues} />
        <div className={"flex justify-end w-full gap-4 py-4"}>
          <div>
            <ul className={"flex flex-col text-right text-lg gap-4 font-bold"}>
              <li>Subtotal:</li>
              <li>Tax:</li>
              <li>Total:</li>
            </ul>
          </div>
          <div>
            <ul className={"flex flex-col gap-4"}>
              <li>
                <span>$</span>
                {subtotal}
              </li>
              <li>
                <TextField
                  className={"w-8"}
                  type="text"
                  name={"tax"}
                  value={tax}
                  onChange={(e) => inputHandler(e)}
                />
                <span>%</span>
              </li>
              <li>
                <span>$</span>
                {total}
              </li>
            </ul>
          </div>
        </div>
        <div className={"flex justify-end gap-2 py-4"}>
          <TextButton
            type="button"
            className={"bg-yellow-500 hover:bg-yellow-400"}
          >
            <Link href="/estimates/">
              <div>Cancel</div>
            </Link>
          </TextButton>
          <TextButton className={"bg-green-600 hover:bg-green-500"}>
            Save
          </TextButton>
        </div>
      </div>
    </form>
  );
}

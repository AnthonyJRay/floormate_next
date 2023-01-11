import { useState } from "react";
import { TextButton } from "@/ui/button";
import Link from "next/Link";
import TextField from "@/ui/form/textfield";
import BillTo from "./bill-to";
import LineItems from "./line-items";
import Summary from "./summary";
import Notes from "./notes";

const currentDate = new Date().toLocaleDateString();
const defaultValues = {
  estimateNO: "004",
  estimateDate: currentDate,
  client: {
    firstName: "John",
    lastName: "Doe",
    address: "123 N Main St",
    phone: "555 123 12345",
    email: "johndoe@example.com",
  },
  lineItems: [
    {
      name: "Install Carpet",
      description: "Install new carpet in living room",
      quantity: 0,
      rate: 0,
      total: 0,
    },
  ],
  summary: "This is a Job Summary",
  notes: "This is a Notes section",
  invoiced: false,
  subtotal: "100",
  tax: "5",
  total: "105",
};

export default function EstimateForm() {
  const [values, setValues] = useState(defaultValues);
  const { estimateDate, estimateNO, subtotal, total, tax } = values;

  function inputHandler(e) {
    const { value, name } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  console.log("----------------");
  console.log(`State coming from form ${JSON.stringify(values.lineItems)}`);
  console.log("----------------");

  return (
    <form className={"bg-gray-100"}>
      <div className={"flex flex-col"}>
        <div className="flex w-full justify-between">
          <div>Estimate: #{estimateNO}</div>
          <div>Date: {estimateDate}</div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mx-4">
          <BillTo values={values} setValues={setValues} />
          <Summary values={values} setValues={setValues} />
        </div>
        <LineItems
          values={values.lineItems}
          setValues={setValues}
          defaultValues={defaultValues}
        />
        <Notes values={values} setValues={setValues} />
        <div className={"flex justify-end w-full gap-4 p-10"}>
          <div>
            <ul className={"flex flex-col text-right text-lg gap-4 font-bold"}>
              <li>Subtotal:</li>
              <li>Tax:</li>
              <li>Total:</li>
            </ul>
          </div>
          <div>
            <ul className={"flex flex-col gap-4"}>
              <li>{subtotal}</li>
              <li>
                <TextField
                  className={"w-10 p-0"}
                  type="text"
                  name={"tax"}
                  value={tax}
                  onChange={(e) => inputHandler(e)}
                />
                <span>%</span>
              </li>
              <li>{total}</li>
            </ul>
          </div>
        </div>
        <div className={"flex justify-end gap-2 p-8"}>
          <TextButton className={"bg-yellow-500 hover:bg-yellow-400"}>
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

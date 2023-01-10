import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TextButton } from "@/ui/button";
import Link from "next/Link";
import TextField from "@/ui/form/textfield";
import TextArea from "@/ui/form/textarea";
import withLabel from "@/ui/form/withlabel";
import LineItem from "@/ui/form/table/lineitem";
import TableLabels from "@/ui/form/table/labels";

const currentDate = new Date().toLocaleDateString();
const defaultValues = {
  estimateNO: "",
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
      name: "Hammer",
      description: "New hammer",
      quantity: "1",
      rate: "70",
      total: "70",
    },
  ],
  summary: "This is a Job Summary",
  notes: "This is a Notes section",
  invoiced: false,
  subtotal: "100",
  tax: "5",
  total: "105",
};

const FirstNameField = withLabel(TextField);
const LastNameField = withLabel(TextField);
const AddressField = withLabel(TextField);
const PhoneField = withLabel(TextField);
const EmailField = withLabel(TextField);
const SummaryField = withLabel(TextArea);
const NotesField = withLabel(TextArea);

export default function EstimateForm() {
  const [values, setValues] = useState(defaultValues);
  const {
    client,
    estimateDate,
    estimateNO,
    summary,
    notes,
    lineItems,
    subtotal,
    total,
    tax,
  } = values;
  const { firstName, lastName, address, phone, email } = client;

  function clientHandler(e) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      client: { ...client, [name]: value },
    }));
  }

  function inputHandler(e) {
    const { value, name } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function lineItemsHandler(e, i) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      lineItems: lineItems.map((item, _i) => {
        return _i === i
          ? {
              ...item,
              [name]: value,
            }
          : item;
      }),
    }));
  }

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
    <form className={"bg-gray-100"}>
      <div className={"flex flex-col"}>
        <div className="flex w-full justify-between">
          <div>Estimate: #{estimateNO}</div>
          <div>Date: {estimateDate}</div>
        </div>

        {/* BILL TO */}
        <div className="flex flex-col md:flex-row gap-5 mx-4">
          <div className="flex flex-col md:w-1/2">
            <div className="text-left text-xl">Bill To:</div>
            <div>
              <div className={"flex"}>
                <FirstNameField
                  name={"firstName"}
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => clientHandler(e)}
                >
                  <span>First Name:</span>
                </FirstNameField>
              </div>
              <div className={"flex"}>
                <LastNameField
                  name={"lastName"}
                  placeholder={"Last Name"}
                  value={lastName}
                  onChange={(e) => clientHandler(e)}
                >
                  <span>Last Name:</span>
                </LastNameField>
              </div>
              <div className={"flex"}>
                <AddressField
                  name={"address"}
                  placeholder={"Address"}
                  value={address}
                  onChange={(e) => clientHandler(e)}
                >
                  <span>Address:</span>
                </AddressField>
              </div>
              <div className={"flex"}>
                <PhoneField
                  name={"phone"}
                  placeholder={"Phone"}
                  value={phone}
                  onChange={(e) => clientHandler(e)}
                >
                  <span>Phone:</span>
                </PhoneField>
              </div>
              <div className={"flex"}>
                <EmailField
                  name={"email"}
                  placeholder={"Email"}
                  value={email}
                  onChange={(e) => clientHandler(e)}
                >
                  <span>Email:</span>
                </EmailField>
              </div>
            </div>
          </div>

          {/* JOB SUMMARY */}
          <div className={"md:w-1/2"}>
            <div className={"h-full"}>
              <SummaryField
                name={"summary"}
                placeholder={"Enter the scope of work"}
                value={summary}
                onChange={(e) => inputHandler(e)}
              >
                <div className={"text-lg p-1"}>Job Summary</div>
              </SummaryField>
            </div>
          </div>
        </div>

        {/* Line Items Area */}
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
          {/* Line Items */}
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
        <NotesField
          name={"notes"}
          value={notes}
          onChange={(e) => inputHandler(e)}
        >
          <div className={"text-lg p-1"}>Additional Notes:</div>
        </NotesField>

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

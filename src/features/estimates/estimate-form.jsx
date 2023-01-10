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
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
  },
  lineItems: [
    {
      name: "",
      description: "",
      quantity: "",
      rate: "",
      total: "",
    },
  ],
  summary: "",
  notes: "",
  invoiced: false,
  subtotal: "",
  tax: "",
  total: "",
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
  const { client, estimateDate, estimateNO, summary, lineItems } = values;
  const { firstName, lastName, address, phone, email } = client;

  function clientHandler(e) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      client: { ...client, [name]: value },
    }));
  }

  function summaryHandler(e) {
    const { value } = e.target;
    setValues((prev) => ({
      ...prev,
      summary: value,
    }));
  }

  function lineItemsHandler(e, i) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      lineItems: lineItems.map((item) => {
        return item === lineItems[i]
          ? {
              ...lineItems[i],
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
    // console.log(e);
    // const newLineItems = lineItems.filter((item, _i) => {
    //   console.log(item);
    //   console.log(`Index coming from the map:${i}`);
    //   console.log(`Index coming from the filter:${_i}`);
    //   return i !== _i;
    // });

    return setValues((prev) => ({
      ...prev,
      lineItems: lineItems.filter((item, _i) => {
        console.log(item);
        return _i !== i;
      }),
    }));

    // setValues((prev) => ({
    //   ...prev,
    //   lineItems: newLineItems,
    // }));
  }

  return (
    <form className={"bg-gray-100"}>
      <div className={"flex flex-col"}>
        <div className="flex w-full justify-between">
          <div>Estimate: #{estimateNO}</div>
          <div>Date: {estimateDate}</div>
        </div>

        {/* BILL TO */}
        <div className="flex flex-col md:flex-row gap-5 mx-6">
          <div className="flex flex-col md:w-1/2">
            <div className="text-left text-xl">Bill To:</div>
            <div className={"flex"}>
              <FirstNameField
                name={"firstName"}
                placeholder="First Name"
                value={firstName}
                onChange={(e) => clientHandler(e)}
              >
                <span>First Name</span>
              </FirstNameField>
            </div>
            <div className={"flex"}>
              <LastNameField
                name={"lastName"}
                placeholder={"Last Name"}
                value={lastName}
                onChange={(e) => clientHandler(e)}
              >
                <span>Last Name</span>
              </LastNameField>
            </div>
            <div className={"flex"}>
              <AddressField
                name={"address"}
                placeholder={"Address"}
                value={address}
                onChange={(e) => clientHandler(e)}
              >
                <span>Address</span>
              </AddressField>
            </div>
            <div className={"flex"}>
              <PhoneField
                name={"phone"}
                placeholder={"Phone"}
                value={phone}
                onChange={(e) => clientHandler(e)}
              >
                <span>Phone</span>
              </PhoneField>
            </div>
            <div className={"flex"}>
              <EmailField
                name={"email"}
                placeholder={"Email"}
                value={email}
                onChange={(e) => clientHandler(e)}
              >
                <span>Email</span>
              </EmailField>
            </div>
          </div>

          {/* JOB SUMMARY */}
          <div className={"md:w-1/2"}>
            <div className={"h-full"}>
              <SummaryField
                className={"w-full h-5px"}
                name={"Job Summary"}
                placeholder={"Enter the scope of work"}
                value={summary}
                onChange={(e) => summaryHandler(e)}
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
        <NotesField>
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
              <li>100</li>
              <li>
                <TextField type="text" className={"w-10 p-0"} />
                <span>%</span>
              </li>
              <li>105</li>
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

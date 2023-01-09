import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TextButton } from "@/ui/button";
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
const TextAreaField = withLabel(TextArea);

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

  function addItem() {
    const newItem = defaultValues.lineItems;
    setValues((prev) => ({
      ...prev,
      lineItems: [...lineItems, { newItem }],
    }));
  }

  function deleteItem(i) {
    const newLineItems = lineItems.filter((item) => item !== lineItems[i]);
    setValues((prev) => ({
      ...prev,
      lineItems: newLineItems,
    }));
  }

  return (
    <form>
      <div className="flex w-full justify-between">
        <div>Estimate: #{estimateNO}</div>
        <div>Date: {estimateDate}</div>
      </div>

      {/* BILL TO */}
      <div className="flex flex-col md:flex-row gap-5 mx-6">
        <div className="flex flex-col md:w-1/2">
          <div className="text-left text-2xl">Bill To:</div>
          <FirstNameField
            name={"firstName"}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => clientHandler(e)}
          >
            <span>First Name</span>
          </FirstNameField>
          <LastNameField
            name={"lastName"}
            placeholder={"Last Name"}
            value={lastName}
            onChange={(e) => clientHandler(e)}
          >
            <span>Last Name</span>
          </LastNameField>
          <AddressField
            name={"address"}
            placeholder={"Address"}
            value={address}
            onChange={(e) => clientHandler(e)}
          >
            <span>Address</span>
          </AddressField>
          <PhoneField
            name={"phone"}
            placeholder={"Phone"}
            value={phone}
            onChange={(e) => clientHandler(e)}
          >
            <span>Phone</span>
          </PhoneField>
          <EmailField
            name={"email"}
            placeholder={"Email"}
            value={email}
            onChange={(e) => clientHandler(e)}
          >
            <span>Email</span>
          </EmailField>
        </div>

        {/* JOB SUMMARY */}
        <div className={"md:w-1/2"}>
          <div className={"h-full"}>
            <TextAreaField
              className={"w-full h-5px"}
              name={"Job Summary"}
              placeholder={"Enter the scope of work"}
              value={summary}
              onChange={(e) => summaryHandler(e)}
            >
              <div className={"text-2xl p-1"}>Job Summary</div>
            </TextAreaField>
          </div>
        </div>
      </div>

      {/* Line Items Area */}
      <div className={"my-8"}>
        <TextButton
          className={"bg-green-600 hover:bg-green-500"}
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
                console.log(item);
                return (
                  <LineItem key={i} data={item} onClick={() => deleteItem(i)} />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
}

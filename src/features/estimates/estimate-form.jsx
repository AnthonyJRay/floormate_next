import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import TextField from "@/ui/form/textfield";
import TextArea from "@/ui/form/textarea";
import withLabel from "@/ui/form/withlabel";
import { TextButton, IconButton } from "@/ui/button";

const currentDate = new Date().toLocaleDateString();
const defaultValues = {
  estimateNO: "0004",
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
  const { client, estimateDate, estimateNO, summary } = values;
  const { firstName, lastName, address, phone, email } = client;

  function ClientHandler(e) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      client: { ...client, [name]: value },
    }));
  }

  function SummaryHandler(e) {
    const { value } = e.target;
    setValues((prev) => ({
      ...prev,
      summary: value,
    }));
  }

  return (
    <form>
      {/* Estimate # and Date */}
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
            onChange={(e) => {
              ClientHandler(e);
            }}
          >
            <span>First Name</span>
          </FirstNameField>
          <LastNameField
            name={"lastName"}
            placeholder={"Last Name"}
            value={lastName}
            onChange={(e) => {
              ClientHandler(e);
            }}
          >
            <span>Last Name</span>
          </LastNameField>
          <AddressField
            name={"address"}
            placeholder={"Address"}
            value={address}
            onChange={(e) => {
              ClientHandler(e);
            }}
          >
            <span>Address</span>
          </AddressField>
          <PhoneField
            name={"phone"}
            placeholder={"Phone"}
            value={phone}
            onChange={(e) => {
              ClientHandler(e);
            }}
          >
            <span>Phone</span>
          </PhoneField>
          <EmailField
            name={"email"}
            placeholder={"Email"}
            value={email}
            onChange={(e) => ClientHandler(e)}
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
              onChange={(e) => {
                SummaryHandler(e);
              }}
            >
              <div className={"text-2xl p-1"}>Job Summary</div>
            </TextAreaField>
          </div>
        </div>
      </div>

      {/* Line Items Area */}
      <div className="my-8">
        <TextButton className="bg-green-600 hover:bg-green-500">
          <div className="flex items-center gap-1">
            <PlusCircleIcon className="text-white w-5" />
            <div>New Line Item</div>
          </div>
        </TextButton>
        {/* Line Items */}
        <div className="w-full">
          <table class="table-auto w-full">
            <thead>
              <tr className={"text-left"}>
                <th>Item Name</th>
                <th>Item Description</th>
                <th>Quantity</th>
                <th>Rate</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={"text-left"}>
                <td>
                  <input type="text" placeholder={"Name"} />
                </td>
                <td>
                  <input type="text" placeholder={"Description"} />
                </td>
                <td>
                  <input type="text" placeholder={"Quantity"} />
                </td>
                <td>
                  <input type="text" placeholder={"Rate"} />
                </td>
                <td>Item Total</td>
                <td>
                  <IconButton className="bg-red-600">
                    <TrashIcon />
                  </IconButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
}

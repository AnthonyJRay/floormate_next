import { useState } from "react";
import TextField from "@/ui/form/textfield";
import withLabel from "@/ui/form/withlabel";

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

export default function EstimateForm() {
  const [values, setValues] = useState(defaultValues);
  const { client, estimateDate, estimateNO } = values;
  const { firstName, lastName, address, phone, email } = client;

  function handleChange(e) {
    console.log(e.target);
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      client: { ...client, [name]: value },
    }));
  }

  return (
    <form>
      <div className="mx-2">
        <div className="flex w-full justify-between">
          <div>Estimate: #{estimateNO}</div>
          <div>Date: {estimateDate}</div>
        </div>

        <div className="flex flex-col">
          <div className="text-left text-2xl">Bill To:</div>
          <FirstNameField
            name={"firstName"}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <span>First Name</span>
          </FirstNameField>
          <LastNameField
            name={"lastName"}
            placeholder={"Last Name"}
            value={lastName}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <span>Last Name</span>
          </LastNameField>
          <AddressField
            name={"address"}
            placeholder={"Address"}
            value={address}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <span>Address</span>
          </AddressField>
          <PhoneField
            name={"phone"}
            placeholder={"Phone"}
            value={phone}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <span>Phone</span>
          </PhoneField>
          <EmailField
            name={"email"}
            placeholder={"Email"}
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <span>Email</span>
          </EmailField>
        </div>

        <div>
          <div>Job Summary</div>
        </div>
      </div>
    </form>
  );
}

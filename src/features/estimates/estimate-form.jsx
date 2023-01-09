import { useState } from "react";
import TextField from "@/ui/form/textfield";
import withLabel from "@/ui/form/withlabel";

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

export default function EstimateForm() {
  const [values, setValues] = useState(defaultValues);
  const { client } = values;
  const FirstNameField = withLabel(TextField);
  const LastNameField = withLabel(TextField);
  const AddressField = withLabel(TextField);
  const PhoneField = withLabel(TextField);
  const EmailField = withLabel(TextField);
  return (
    <form>
      <div>
        <div className="text-left text-2xl">Client Info</div>
        <div className="flex flex-col">
          <FirstNameField
            placeholder="First Name"
            value={values.client.firstName}
            className="text-pink-600"
            onChange={(e) => {
              const { value } = e.target;

              setValues((prev) => ({
                ...prev,
                client: { ...client, firstName: value },
              }));
            }}
          >
            <span>First Name</span>
          </FirstNameField>
          <LastNameField
            placeholder={"Last Name"}
            value={values.client.lastName}
            onChange={() =>
              setValues((prev) => ({
                ...prev,
                lastName,
              }))
            }
          >
            <span>Last Name</span>
          </LastNameField>
          <AddressField
            placeholder={"Address"}
            value={values.client.address}
            onChange={() =>
              setValues((prev) => ({
                ...prev,
                address,
              }))
            }
          >
            <span>Address</span>
          </AddressField>
          <PhoneField
            placeholder={"555-123-1234"}
            value={values.client.phone}
            onChange={() =>
              setValues((prev) => ({
                ...prev,
                phone,
              }))
            }
          >
            <span>Phone</span>
          </PhoneField>
          <EmailField
            placeholder={"Email"}
            value={values.client.email}
            onChange={() =>
              setValues((prev) => ({
                ...prev,
                email,
              }))
            }
          >
            <span>Email</span>
          </EmailField>
        </div>
      </div>
    </form>
  );
}

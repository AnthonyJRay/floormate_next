import { useState } from "react";
import TextField from "@/ui/form/textfield";
import withLabel from "@/ui/form/withlabel";

const defaultValues = [
  {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
  },
];

export default function EstimateForm() {
  const [values, setValues] = useState(defaultValues);
  const { firstName, lastName, address, phone, email } = values;
  const FirstNameField = withLabel(TextField);
  const LastNameField = withLabel(TextField);
  const AddressField = withLabel(TextField);
  const PhoneField = withLabel(TextField);
  const EmailField = withLabel(TextField);
  return (
    <form>
      <div>
        <div className="text-left text-2xl">Client Info</div>
        <div className="flex flex-col justify-center text-center">
          <FirstNameField
            placeholder={"First Name"}
            value={firstName}
            onChange={() =>
              setValues((prev) => ({
                ...prev,
                firstName,
              }))
            }
          >
            <span>First Name</span>
          </FirstNameField>
          <LastNameField
            placeholder={"Last Name"}
            value={lastName}
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
            value={address}
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
            value={phone}
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
            value={email}
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

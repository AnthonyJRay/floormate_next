import { useState } from "react";
import NewTextField from "@/ui/form/newtextfield";
import withLabel from "@/ui/form/withlabel";
import { TextButton } from "@/ui/button";
import { Success } from "@/ui/alerts";

const defaultValues = {
  firstName: "",
  lastName: "",
  business: {
    name: "",
    address: "",
  },
  phone: "",
  email: "",
};

const FirstName = withLabel(NewTextField);
const LastName = withLabel(NewTextField);
const BusinessName = withLabel(NewTextField);
const BusinessAddress = withLabel(NewTextField);
const Phone = withLabel(NewTextField);
const Email = withLabel(NewTextField);

export default function Settings(parentValues) {
  const [values, setValues] = useState(defaultValues);
  return (
    <>
      <h1>Settings</h1>
      <div className={"flex flex-col w-full gap-2"}>
        <FirstName
          value={values.firstName}
          onChange={(firstName) =>
            setValues((prev) => ({
              ...prev,
              firstName,
            }))
          }
        >
          First Name
        </FirstName>
        <LastName
          value={values.lastName}
          onChange={(lastName) =>
            setValues((prev) => ({
              ...prev,
              lastName,
            }))
          }
        >
          Last Name
        </LastName>
        <BusinessName
          value={values.business.name}
          onChange={(name) =>
            setValues((prev) => ({
              ...prev,
              business: {
                ...prev.business,
                name,
              },
            }))
          }
        >
          Business Name
        </BusinessName>
        <BusinessAddress
          value={values.business.address}
          onChange={(address) =>
            setValues((prev) => ({
              ...prev,
              business: {
                ...prev.business,
                address,
              },
            }))
          }
        >
          Business Address
        </BusinessAddress>
        <Phone
          value={values.phone}
          onChange={(phone) =>
            setValues((prev) => ({
              ...prev,
              phone,
            }))
          }
        >
          Phone
        </Phone>
        <Email
          value={values.email}
          onChange={(email) =>
            setValues((prev) => ({
              ...prev,
              email,
            }))
          }
        >
          Email
        </Email>
        <div className={"flex justify-between"}>
          <TextButton className={"bg-green-600 hover:bg-green-500"}>
            Save
          </TextButton>
          <div className={"flex gap-2 text-xs"}>
            <button className={"italic text-gray-700"}>Reset Password</button>
            <button className={"italic text-red-600"}>Delete Account</button>
          </div>
        </div>
        <Success />
      </div>
    </>
  );
}

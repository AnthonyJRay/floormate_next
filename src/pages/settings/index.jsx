import { useState } from "react";
import NewTextField from "@/ui/form/newtextfield";
import withLabel from "@/ui/form/withlabel";
import { TextButton } from "@/ui/button";
import { Success } from "@/ui/alerts";

import clientPromise from "../../../lib/mongodb";

// const defaultValues = {
//   firstName: "",
//   lastName: "",
//   business: {
//     name: "",
//     address: "",
//   },
//   phone: "",
//   email: "",
// };

const FirstName = withLabel(NewTextField);
const LastName = withLabel(NewTextField);
const BusinessName = withLabel(NewTextField);
const BusinessAddress = withLabel(NewTextField);
const Phone = withLabel(NewTextField);
const Email = withLabel(NewTextField);

export default function Settings({ parentValues, settings }) {
  const [values, setValues] = useState(settings[0]);
  console.log(values);
  console.log(settings);
  return (
    <>
      <h1>Settings</h1>
      <div className={"flex flex-col w-full md:w-3/4 gap-2"}>
        <FirstName
          value={values.userFirstName}
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
          value={values.userLastName}
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
          value={values.businessName}
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
          value={values.userAddress.street}
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
          value={values.userPhone}
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
          value={values.userEmail}
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
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = await client.db("floormate_db");

    const data = await db.collection("users").find({}).toArray();
    const settings = data.map((d) => {
      return d.user;
    });
    return {
      props: { settings: JSON.parse(JSON.stringify(settings)) },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
      },
    };
  }
}

import TextField from "@/ui/form/textfield";
import withLabel from "@/ui/form/withlabel";

const FirstNameField = withLabel(TextField);
const LastNameField = withLabel(TextField);
const AddressField = withLabel(TextField);
const PhoneField = withLabel(TextField);
const EmailField = withLabel(TextField);

export default function BillTo({ values, setValues }) {
  const { client } = values;
  const { firstName, lastName, address, phone, email } = client;

  function clientHandler(e) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      client: { ...client, [name]: value },
    }));
  }

  return (
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
  );
}

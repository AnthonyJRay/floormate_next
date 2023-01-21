import TextField from "@/ui/form/textfield";
import withLabel from "@/ui/form/withlabel";
import AddressField from "@/ui/form/address";

const FirstNameField = withLabel(TextField);
const LastNameField = withLabel(TextField);
const Address = withLabel(AddressField);
const PhoneField = withLabel(TextField);
const EmailField = withLabel(TextField);

export default function BillTo({
  firstName,
  lastName,
  address,
  phone,
  email,
  setValues,
}) {
  function clientHandler(e) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      client: { ...prev.client, [name]: value },
    }));
  }
  function addressHandler(e) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      client: { ...prev.client, address: { ...prev.address, [name]: value } },
    }));
  }

  return (
    <div className="flex flex-col md:w-1/2 p-4 border-2 rounded">
      <div className="text-lg text-center font-bold">Client</div>
      <FirstNameField
        className={"w-full m-2 md:py-2 italic text-sm"}
        name={"firstName"}
        placeholder="First Name"
        value={firstName}
        onChange={(e) => clientHandler(e)}
      >
        <span>First Name:</span>
      </FirstNameField>

      <LastNameField
        className={"w-full m-2 md:py-2 italic text-sm"}
        name={"lastName"}
        placeholder={"Last Name"}
        value={lastName}
        onChange={(e) => clientHandler(e)}
      >
        <span>Last Name:</span>
      </LastNameField>

      <Address
        className={"w-full m-2 md:py-2 italic text-sm"}
        name={"address"}
        placeholder={"Street"}
        values={address}
        onChange={(e) => addressHandler(e)}
      >
        <span>Address:</span>
      </Address>

      <PhoneField
        className={"w-full m-2 md:py-2 italic text-sm"}
        name={"phone"}
        placeholder={"Phone"}
        value={phone}
        onChange={(e) => clientHandler(e)}
      >
        <span>Phone:</span>
      </PhoneField>

      <EmailField
        className={"w-full m-2 md:py-2 italic text-sm"}
        name={"email"}
        placeholder={"Email"}
        value={email}
        onChange={(e) => clientHandler(e)}
      >
        <span>Email:</span>
      </EmailField>
    </div>
  );
}

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
    <div className="flex flex-col md:w-1/2 p-4 border-2 rounded">
      <div className="text-left text-xl font-bold">Client:</div>
      <div className={"text-sm py-6"}>
        <div className="w-full md:py-2">
          <FirstNameField
            name={"firstName"}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => clientHandler(e)}
          >
            <span>First Name:</span>
          </FirstNameField>
        </div>

        <div className="w-full md:py-2">
          <LastNameField
            name={"lastName"}
            placeholder={"Last Name"}
            value={lastName}
            onChange={(e) => clientHandler(e)}
          >
            <span>Last Name:</span>
          </LastNameField>
        </div>

        <div className="w-full md:py-2">
          <AddressField
            name={"address"}
            placeholder={"Address"}
            value={address}
            onChange={(e) => clientHandler(e)}
          >
            <span>Address:</span>
          </AddressField>
        </div>

        <div className="w-full md:py-2">
          <PhoneField
            name={"phone"}
            placeholder={"Phone"}
            value={phone}
            onChange={(e) => clientHandler(e)}
          >
            <span>Phone:</span>
          </PhoneField>
        </div>

        <div className="w-full md:py-2">
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

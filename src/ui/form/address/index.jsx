import TextField from "../textfield";

export default function AddressField({ values, onChange = () => {}, ...rest }) {
  const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const { street, city, state, zip } = values;

  return (
    <div className={"flex gap-2"}>
      <TextField
        placeholder="Street"
        name="street"
        value={street}
        onChange={onChange}
        className={"w-3/6"}
      />
      <TextField
        placeholder="City"
        name="city"
        value={city}
        onChange={onChange}
        className={"w-2/6"}
      />
      <select
        name="state"
        value={state}
        onChange={onChange}
        className={"w-1/6 text-gray-600 border-b-2 p-1"}
      >
        {states.map((option, i) => {
          return (
            <option key={i} {...rest}>
              {option}
            </option>
          );
        })}
      </select>
      <TextField
        placeholder="Zip"
        name="zip"
        value={zip}
        onChange={onChange}
        className={"w-1/6"}
      />
    </div>
  );
}

// <div>
//   <TextField className={"w-3/6"} placeholder={"City"} />
//   <TextField className={"w-2/6"} placeholder={"State"} />
//   <TextField className={"w-1/6"} placeholder={"Zip"} />
// </div>

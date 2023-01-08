import Textfield from "../textfield";

export default function AddressField({ options, ...rest }) {
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

  const defaultStyles = "text-gray-600";
  return (
    <>
      <Textfield placeholder="Street" />
      <select className={defaultStyles}>
        {states.map((option, i) => {
          return (
            <option key={i} {...rest}>
              {option}
            </option>
          );
        })}
      </select>
      <Textfield placeholder="Zip" />
    </>
  );
}

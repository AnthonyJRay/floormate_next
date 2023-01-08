import { useState } from "react";

import Textfield from "@/ui/textfield";
import { EmailField, SelectField } from "@/ui/textfield";

export default function EstimateForm() {
  const states = [
    "State",
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
  const [estimate, setEstimate] = useState("");
  return (
    <div className="w-full text-center">
      <div>
        <h3>{`Estimate:`}</h3>
        <div>Date: ${}</div>
      </div>
      <div className="flex flex-col w-1/2 text-left gap-2">
        {/* Client Info */}
        <Textfield placeholder="First Name" />
        <Textfield placeholder="Last Name" />
        <Textfield placeholder="Street" />
        <div className="flex">
          <Textfield placeholder="City" />
          <SelectField options={states} defaultValue={"State"} />
        </div>
        <Textfield placeholder="Zip" />
        {/* street, city, state zip*/}
        <EmailField placeholder="Email" />
      </div>
      <div>
        <summary placeholder={"Job Summary"}></summary>
      </div>
      <div>
        <Textfield />
        {/* Line Items Inputs */}
        {/* Line Items Inputs */}
        {/* Line Items Inputs */}
      </div>
      <div>{/* Additional Notes */}</div>
      <div>
        {/* Subtotal */}
        {/* Tax Input */}
        {/* Total */}
      </div>
      <div>
        {/* Cancel button */}
        {/* Save button */}
      </div>
    </div>
  );
}

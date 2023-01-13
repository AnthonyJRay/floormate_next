import { useState } from "react";
import EstimateForm from "@/features/estimates/form";

const currentDate = new Date().toLocaleDateString();
const defaultValues = {
  estimateNO: "004",
  estimateDate: currentDate,
  client: {
    firstName: "John",
    lastName: "Doe",
    address: {
      street: "123 N Main St",
      city: "Omaha",
      state: "NE",
      zip: "68164",
    },
    phone: "555 123 12345",
    email: "johndoe@example.com",
  },
  lineItems: [
    {
      name: "",
      description: "Install new carpet in living room",
      quantity: 0,
      rate: 0,
      total: 0,
    },
  ],
  summary: "This is a Job Summary",
  notes: "This is a Notes section",
  invoiced: false,
  subtotal: "100",
  tax: "5",
  total: "105",
};

export default function NewEstimate() {
  const [values, setValues] = useState(defaultValues);

  return (
    <div className="text-center bg-gray-50 text-gray-700">
      <EstimateForm
        values={values}
        setValues={setValues}
        defaultValues={defaultValues}
      />
    </div>
  );
}

import { useState } from "react";
import EstimateForm from "@/features/estimates/form";

const currentDate = new Date().toLocaleDateString();

const defaultValues = {
  estimateNO: "",
  estimateDate: currentDate,
  client: {
    firstName: "",
    lastName: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    phone: "",
    email: "",
  },
  lineItems: [
    {
      name: "",
      description: "",
      quantity: "",
      rate: "",
      total: "",
    },
  ],
  summary: "",
  invoiced: false,
  subtotal: "",
  tax: "",
  total: "",
};

// values, setValues, defaultValues

export default function NewEstimate({}) {
  const [newEstimate, setNewEstimate] = useState(defaultValues);
  console.log("From New Estimate component!");
  console.log(newEstimate);

  return (
    <div className="text-center bg-gray-50 text-gray-700">
      <EstimateForm
        values={newEstimate}
        setValues={setNewEstimate}
        defaultValues={defaultValues}
      />
    </div>
  );
}

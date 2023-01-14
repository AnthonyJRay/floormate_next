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

export default function NewEstimate({ values, setValues }) {
  const [newEstimate, setNewEstimate] = useState(defaultValues);
  console.log("New estimate State");
  console.log(newEstimate);
  console.log("Main state in App file");
  console.log(values);

  function onSave(e) {
    e.preventDefault();

    const data = { ...newEstimate };
    setValues((prev) => [...prev, data]);
  }

  return (
    <div className="text-center bg-gray-50 text-gray-700">
      <EstimateForm
        values={newEstimate}
        setValues={setNewEstimate}
        defaultValues={defaultValues}
        onSave={onSave}
      />
    </div>
  );
}

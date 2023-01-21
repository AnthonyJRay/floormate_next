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
      quantity: 0,
      rate: 0,
      total: 0,
    },
  ],
  summary: "",
  invoiced: false,
  subtotal: 0,
  tax: 0,
  total: 0,
};

export default function NewEstimate({ values, setValues }) {
  const [newEstimate, setNewEstimate] = useState(defaultValues);
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

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
  // values is existing Estimates state.
  // Match ??? to values[index?]
  // Conditionally pass "values" or defaultValues/empty state to EstimateForm component?

  function onSave(e) {
    e.preventDefault();
    const data = { ...newEstimate };
    setValues((prev) => [...prev, data]);
  }

  // New Estimate Form needs some sort of validation/required fields. Client info etc.
  // Does Form need to have local state cleared? If re-directs back to Estimates page, New Estimate will always load defaultsValues as state.
  // Saving should re-direct back to Estimates page?
  // Should be able to click "View" and have that estimate populate a Form component. Saving should update that Estimate.
  // Should add in a Success/Failure modal after saving form.

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

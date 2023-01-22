import { useState } from "react";
import EstimateForm from "@/features/estimates/form";

export default function NewEstimate({ values, setValues, testValues }) {
  const defaultValues = testValues.estimates[0];
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

import { useState } from "react";
import EstimateForm from "@/features/estimates/form";

export default function NewEstimate({ values, setValues, testValues }) {
  const defaultValues = testValues.estimates[0];
  const [newEstimate, setNewEstimate] = useState(defaultValues);
  function onSave(e) {
    e.preventDefault();
    const data = { ...newEstimate };
    setValues((prev) => [data, ...prev]);
  }
  return (
    <div className="m-2 text-center text-gray-700">
      <EstimateForm
        values={newEstimate}
        setValues={setNewEstimate}
        defaultValues={defaultValues}
        onSave={onSave}
      />
    </div>
  );
}

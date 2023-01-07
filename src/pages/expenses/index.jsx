import { useState } from "react";
import { TextButton } from "@/ui/button";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const defaultValues = {
  occurredOn: "",
  name: "",
  total: "",
  description: "",
};

export default function Expenses() {
  const [expense, setExpense] = useState([defaultValues]);
  return (
    <div className="text-center">
      <h1>Expenses</h1>
      <p>This is the Expenses page.</p>
      <TextButton
        className="bg-green-500 hover:bg-green-400"
        onClick={() => {
          setExpense([defaultValues, ...expense]);
        }}
      >
        <div className="flex items-center gap-1">
          <PlusCircleIcon className="w-5 text-white" />
          <div>Add Expense</div>
        </div>
      </TextButton>
    </div>
  );
  // function newExpense() {
  //   return setExpense([defaultValues, ...expense]);
  // }
}

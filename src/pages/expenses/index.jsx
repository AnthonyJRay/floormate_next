import { useState } from "react";
import { TextButton } from "@/ui/button";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
const currentDate = new Date().toLocaleDateString();

function addExpense() {
  return console.log("Expense added!");
}

export default function Expenses({}) {
  const [expenses, setExpenses] = useState([]);

  return (
    <div className={"text-center"}>
      <h1>Expenses</h1>
      <div className={"flex justify-center my-4"}>
        <TextButton
          className="flex gap-1 bg-green-600 hover:bg-green-500"
          onClick={() => addExpense()}
        >
          <PlusCircleIcon className="text-white w-5" />
          <div>Add Expense</div>
        </TextButton>
      </div>
    </div>
  );
}

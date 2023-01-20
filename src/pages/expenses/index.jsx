import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TextButton, IconButton } from "@/ui/button";
import { TableLabels } from "@/ui/table";
import TextField from "@/ui/form/textfield";
import ExpensesBody from "@/features/expenses";
const currentDate = new Date().toLocaleDateString();

function addExpense() {
  return console.log("Expense added!");
}

export default function Expenses({}) {
  // const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [newExpense, setNewExpense] = useState({
    occurredOn: currentDate,
    name: "",
    purpose: "",
    total: "",
  });
  const [expenses, setExpenses] = useState([
    {
      expenseID: "1",
      occurredOn: currentDate,
      name: "Hammer",
      purpose: "New hammer for installing tackstrip on concrete",
      total: "$60",
    },
    {
      expenseID: "2",
      occurredOn: currentDate,
      name: "Fuel",
      purpose: "Fuel for work truck.",
      total: "$135",
    },
    {
      expenseID: "3",
      occurredOn: currentDate,
      name: "Tack Strip",
      purpose: "Tack Strip for carpet basement",
      total: "$45",
    },
  ]);

  function onDelete(i) {
    const newExpenses = expenses.filter((_, _i) => {
      return i !== _i;
    });
    setExpenses(newExpenses);
  }

  function onEdit(e, i) {
    console.log(e, i);
  }

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

      <table className={"table-auto w-full"}>
        <thead>
          <TableLabels labels={["Date", "Name", "Purpose", "Total"]} />
        </thead>
        <tbody>
          {expenses.map((expense, i) => {
            return (
              <ExpensesBody
                key={i}
                value={i === editIndex ? newExpense : expense}
                isEditing={i === editIndex}
                onEdit={() => {
                  setNewExpense(expense);
                  setEditIndex(i);
                }}
                onChange={(value) => {
                  setNewExpense(value);
                }}
                onDelete={() => {
                  setExpenses((prev) => {
                    prev.filter((_deletedExpensem, _i) => {
                      return _i !== i;
                    });
                  });
                }}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TextButton, IconButton } from "@/ui/button";
import { TableLabels } from "@/ui/table";
import { TextField } from "@/ui/form/textfield";
const currentDate = new Date().toLocaleDateString();

function addExpense() {
  return console.log("Expense added!");
}

export default function Expenses({}) {
  const [expenses, setExpenses] = useState([
    {
      expenseID: "1",
      expenseDate: currentDate,
      expenseName: "Hammer",
      expensePurpose: "New hammer for installing tackstrip on concrete",
      expenseTotal: "$60",
    },
    {
      expenseID: "2",
      expenseDate: currentDate,
      expenseName: "Fuel",
      expensePurpose: "Fuel for work truck.",
      expenseTotal: "$135",
    },
    {
      expenseID: "3",
      expenseDate: currentDate,
      expenseName: "Tack Strip",
      expensePurpose: "Tack Strip for carpet basement",
      expenseTotal: "$45",
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
              <tr key={i} className={"border rounded"}>
                <td>{expense.expenseDate}</td>
                <td>{expense.expenseName}</td>
                <td>{expense.expensePurpose}</td>
                <td>{expense.expenseTotal}</td>
                <td>
                  <IconButton
                    className="bg-yellow-500 hover:bg-yellow-400"
                    type={"button"}
                    onClick={(e) => onEdit(e, i)}
                  >
                    <PencilSquareIcon />
                  </IconButton>
                </td>
                <td>
                  <IconButton
                    className="bg-red-600"
                    type={"button"}
                    onClick={() => onDelete(i)}
                  >
                    <TrashIcon />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TextButton } from "@/ui/button";
import { TableLabels } from "@/ui/table";
import ExpensesBody from "@/features/expenses";
const currentDate = new Date().toLocaleDateString();

const defaultValues = {
  occurredOn: currentDate,
  name: "",
  purpose: "",
  total: "",
};

export default function Expenses({}) {
  const [editIndex, setEditIndex] = useState(-1);
  const [newExpense, setNewExpense] = useState(defaultValues);
  const [expenses, setExpenses] = useState([
    {
      expenseID: "1",
      occurredOn: "03/24/2022",
      name: "Hammer",
      purpose: "New hammer for installing tackstrip on concrete",
      total: "$60",
    },
    {
      expenseID: "2",
      occurredOn: "06/04/2022",
      name: "Fuel",
      purpose: "Fuel for work truck.",
      total: "$135",
    },
    {
      expenseID: "3",
      occurredOn: "08/18/2022",
      name: "Tack Strip",
      purpose: "Tack Strip for carpet basement",
      total: "$45",
    },
  ]);

  return (
    <div
      className={"w-3/4 absolute right-0 top-24 m-2 text-center text-gray-700"}
    >
      <h1>Expenses</h1>
      <div className={"flex justify-center my-4"}>
        <TextButton
          className="flex gap-1 bg-green-600 hover:bg-green-500"
          onClick={() => {
            setExpenses([defaultValues, ...expenses]);
            setEditIndex(0);
          }}
        >
          <PlusCircleIcon className="text-white w-5" />
          <div>Add Expense</div>
        </TextButton>
      </div>

      <table className={"w-full border-separate m-4"}>
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
                onCancel={() => {
                  setEditIndex(-1);
                }}
                onSave={(changedExpense) => {
                  setExpenses((prev) => [
                    ...prev.map((_expense, _i) =>
                      i !== _i ? _expense : changedExpense
                    ),
                  ]);
                  setNewExpense(defaultValues);
                  setEditIndex(-1);
                }}
                onChange={(value) => {
                  setNewExpense(value);
                }}
                onDelete={() => {
                  setExpenses((prev) => [
                    ...prev.filter((_, _i) => {
                      return i !== _i;
                    }),
                  ]);
                }}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TextButton } from "@/ui/button";
import { TableLabels } from "@/ui/table";
import Expense from "@/features/expenses";
import dbConnect from "../../../lib/dbConnect";
const currentDate = new Date().toLocaleDateString();
import { getData } from "@/pages/api/expenses";
import ExpenseModel from "../../../models/Expense";

const defaultValues = {
  occurredOn: currentDate,
  name: "",
  purpose: "",
  total: "",
};

export async function getServerSideProps(context) {
  await dbConnect();
  try {
    const data = await ExpenseModel.find({});
    const expensesList = data.map((d) => {
      const expense = d.toObject();
      expense._id = expense._id.toString();
      return expense;
    });
    console.log("expensesList", expensesList);
    return {
      props: { expensesList },
      // props: { expense: JSON.parse(JSON.stringify(expense)) },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
      },
    };
  }
}

export default function Expenses({ expensesList }) {
  const [editIndex, setEditIndex] = useState(-1);
  const [newExpense, setNewExpense] = useState(defaultValues);
  const [expenses, setExpenses] = useState(expensesList);
  console.log("Real Expenses List?", expensesList);

  async function addExpenseHandler(enteredExpenseData) {
    const newData = getData();
    console.log(newData);
    const response = await fetch("/api/new-expense", {
      method: "POST",
      body: JSON.stringify(enteredExpenseData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
  }

  return (
    <div className={"w-full m-2 text-center text-gray-700"}>
      <h1>Expenses</h1>
      <div className={"flex justify-center my-4"}>
        <TextButton
          className="flex gap-1 py-1 bg-green-600 hover:bg-green-500"
          onClick={() => {
            setExpenses([defaultValues, ...expenses]);
            setEditIndex(0);
          }}
        >
          <PlusCircleIcon className="text-white w-5" />
          <div>Add Expense</div>
        </TextButton>
      </div>

      <div className={"w-full flex flex-col gap-1"}>
        <TableLabels
          className={"hidden md:block bg-slate-300 p-2 italic"}
          labels={["Date", "Name", "Purpose", "Total", ""]}
        />
        <div className={"flex flex-col gap-2"}>
          {expenses.map((expense, i) => {
            console.log("expensesList", expense);
            return (
              <Expense
                key={i}
                // value={i === editIndex ? newExpense : expense}
                value={expense}
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
                    ...prev.map((_expense, _i) => {
                      return i !== _i ? _expense : changedExpense;
                    }),
                  ]);
                  setNewExpense(defaultValues);
                  setEditIndex(-1);
                  addExpenseHandler(changedExpense);
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
        </div>
      </div>
    </div>
  );
}

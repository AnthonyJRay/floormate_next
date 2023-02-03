import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TextButton } from "@/ui/button";
import { TableLabels } from "@/ui/table";
import Expense from "@/features/expenses";
import clientPromise from "../../../lib/mongodb";
const currentDate = new Date().toLocaleDateString();
import { getData } from "@/pages/api/expenses";

const defaultValues = {
  occurredOn: currentDate,
  name: "",
  purpose: "",
  total: "",
};

export default function Expenses({ expense }) {
  const [editIndex, setEditIndex] = useState(-1);
  const [newExpense, setNewExpense] = useState(defaultValues);
  const [expenses, setExpenses] = useState(...expense);

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
            return (
              <Expense
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
                  // console.log("Changed Expense", changedExpense);
                  setExpenses((prev) => [
                    ...prev.map((_expense, _i) => {
                      // console.log("Expense from inside map:", _expense);
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

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = await client.db("floormate_db");

    const data = await db.collection("users").find({}).toArray();
    const expense = data.map((d) => {
      return d.expenses;
    });
    return {
      props: { expense: JSON.parse(JSON.stringify(expense)) },
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

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { TextButton } from "@/ui/button";
import { TableLabels } from "@/ui/table";
import Expense from "@/features/expenses";
import clientPromise from "../../../lib/mongodb";
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
          className={"bg-slate-300 p-2 italic"}
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
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = await client.db("floormate_db");

    const data = await db.collection("expenses").find({});
    // const a = JSON.stringify(expenses);
    // const a = data.map((stuff) => {
    //   const expenses = stuff.expenses;
    //   return expenses;
    // });
    console.log(JSON.parse(JSON.stringify(data)));
    return {
      // JSON.parse(JSON.stringify(expenses))
      // props: { expenses: JSON.parse(JSON.stringify(a)) },
      props: { expenses: "Test" },
    };
  } catch (error) {
    console.error(error);
  }
}

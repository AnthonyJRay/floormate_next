import { TextButton } from "@/ui/button";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function Expenses() {
  return (
    <div className="text-center">
      <h1>Expenses</h1>
      <p>This is the Expenses page.</p>
      <TextButton className="bg-green-500 hover:bg-green-400">
        <div className="flex items-center gap-1">
          <PlusCircleIcon className="w-5 text-white" />
          <div>Add Expense</div>
        </div>
      </TextButton>
    </div>
  );
}

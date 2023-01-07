import { TextButton, IconButton } from "@/ui/button";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

export default function Homepage() {
  return (
    <div className="mt-16 container mx-auto">
      <div className="flex items-center gap-4">
        <TextButton className="bg-blue-500 hover:bg-blue-400">
          Log In
        </TextButton>
        <TextButton className="bg-green-500 hover:bg-green-400">
          <div className="flex items-center gap-1">
            <PlusCircleIcon className="w-5 text-white" />
            <div>Add Expense</div>
          </div>
        </TextButton>
        <IconButton className="bg-red-500 hover:bg-yellow-400">
          <PencilSquareIcon className="w-5" />
        </IconButton>
      </div>
    </div>
  );
}

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import EstimateDisplay from "@/features/estimates/estimate-display";
import { TextButton } from "@/ui/button";
import Link from "next/Link";

export default function Estimates({ values, setValues }) {
  function onDelete(i) {
    return setValues((prev) => {
      return prev.filter((_deleted, _i) => {
        return _i !== i;
      });
    });
  }

  return (
    <div className="text-center bg-gray-50 text-gray-700 h-[100vh]">
      <h1>Estimates</h1>
      <div className="my-4">
        <TextButton className="bg-green-600 hover:bg-green-500">
          <Link href="/estimates/new-estimate">
            <div className="flex items-center gap-1">
              <PlusCircleIcon className="text-white w-5" />
              <div>Add Estimate</div>
            </div>
          </Link>
        </TextButton>
      </div>
      <div className={"flex flex-col m-4 items-center"}>
        {values.map((estimate, i) => {
          return (
            <EstimateDisplay
              key={i}
              data={estimate}
              onDelete={() => onDelete(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

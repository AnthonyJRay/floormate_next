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
    <div className="w-3/4 text-center text-gray-700">
      <h1>Estimates</h1>
      <div className="flex justify-center my-4">
        <Link href="/estimates/new-estimate">
          <div>
            <TextButton className="flex gap-1 bg-green-600 hover:bg-green-500">
              <PlusCircleIcon className="text-white w-5" />
              <div>Add Estimate</div>
            </TextButton>
          </div>
        </Link>
      </div>
      <div className={"flex flex-col m-4 gap-2 items-center"}>
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

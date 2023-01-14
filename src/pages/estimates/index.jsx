import { PlusCircleIcon } from "@heroicons/react/24/solid";
import EstimateDisplay from "@/features/estimates/estimate-display";
import { TextButton } from "@/ui/button";
import Link from "next/Link";

export default function Estimates({ values, setValues }) {
  console.log("From inside Estimates component.");
  console.log(values);

  return (
    <div className="text-center">
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
      <div className="flex flex-col md:flex-row mx-2">
        {values.map((estimate, i) => {
          return (
            <EstimateDisplay
              key={i}
              data={estimate}
              onDelete={() => {
                setValues((prev) => {
                  return prev.filter((_deleted, _i) => {
                    return _i !== i;
                  });
                });
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

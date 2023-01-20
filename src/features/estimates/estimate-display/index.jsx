import Link from "next/Link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@/ui/button";

import Card from "@/ui/card";

export default function EstimateDisplay({ data, onDelete }) {
  const { estimateNO, client, estimateDate, summary, total, invoiced } = data;
  return (
    <Card
      className={
        "flex flex-col w-full border rounded p-2 bg-slate-100  items-center drop-shadow-md"
      }
    >
      {/* Estimate info */}
      <div className="flex w-full justify-between gap-2 text-xs italic">
        <div>#{estimateNO}</div>
        <div>{estimateDate}</div>
      </div>

      {/* Client names */}
      <div className={"text-lg"}>
        {client.firstName} {client.lastName}
      </div>

      {/* Summary */}
      <div className="py-4 grow text-left">{summary}</div>

      {/* Price and Invoiced */}
      <div className={"lg:text-right"}>
        <div className="text-green-500">${total}</div>
        <div className={invoiced ? "text-green-500" : "text-red-500"}>
          Invoiced
        </div>
      </div>

      {/* Buttons */}
      <div className="flex lg:flex-row justify-center gap-2 my-1 px-2">
        <Link href="/estimates/new-estimate">
          <div>
            <IconButton className="bg-yellow-500 hover:bg-yellow-400">
              <div>
                <PencilSquareIcon />
              </div>
            </IconButton>
          </div>
        </Link>
        <div>
          <IconButton
            className="bg-red-500 hover:bg-red-400"
            onClick={() => onDelete()}
          >
            <TrashIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

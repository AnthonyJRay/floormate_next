import Link from "next/Link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@/ui/button";

import Card from "@/ui/card";

export default function EstimateDisplay({ data, onDelete }) {
  const { estimateNO, estimateDate, client, summary, total, invoiced } = data;
  return (
    <Card
      className={
        "flex w-full gap-1 m-1 p-1 bg-slate-100 items-center drop-shadow-md"
      }
    >
      <div className="flex flex-col text-xs m-2 h-full place-content-between">
        <div>#{estimateNO}</div>
        <div>{estimateDate}</div>
      </div>
      {/* <div className="text-md">
          {client.firstName} {client.lastName}
        </div> */}

      <div className="my-4 grow text-left">
        <div>{summary}</div>
      </div>
      <div className={"w-38 text-right px-8"}>
        <div className={invoiced ? "text-green-500" : "text-red-500"}>
          {invoiced ? "Invoiced" : "Not Invoiced"}
        </div>
        <div className="text-green-500">${total}</div>
      </div>
      <div className="flex justify-center gap-2 my-2">
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

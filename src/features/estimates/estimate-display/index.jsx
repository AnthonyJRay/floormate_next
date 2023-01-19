import Link from "next/Link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@/ui/button";

import Card from "@/ui/card";

export default function EstimateDisplay({ data, onDelete }) {
  const { estimateNO, client, estimateDate, summary, total, invoiced } = data;
  return (
    <Card
      className={"flex w-full gap-4 bg-slate-100  items-center drop-shadow-md"}
    >
      <div className="flex flex-col lg:flex-row gap-2 text-xs m-2 w-1/12">
        <div>#{estimateNO}</div>
        <div>{estimateDate}</div>
      </div>

      <div className={"hidden xl:flex w-1/12"}>
        {client.firstName} {client.lastName}
      </div>

      <div className="py-4 grow text-left w-8/12">{summary}</div>

      <div className={"w-1/12 text-right"}>
        <div className={invoiced ? "text-green-500" : "text-red-500"}>
          {invoiced ? "Invoiced" : "Not Invoiced"}
        </div>
        <div className="text-green-500">${total}</div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center w-1/12 gap-2 my-1 px-2">
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

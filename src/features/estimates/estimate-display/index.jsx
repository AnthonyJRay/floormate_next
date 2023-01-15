import Link from "next/Link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { IconButton, TextButton } from "@/ui/button";

import Card from "@/ui/card";

export default function EstimateDisplay({ data, className, onDelete }) {
  const defaultClassName = "flex flex-col grow gap-1 m-1 bg-gray-800";
  const { estimateNO, estimateDate, client, summary, total, invoiced } = data;
  return (
    <Card className={`${defaultClassName} ${className}`}>
      <div className="flex justify-between m-2">
        <div>#{estimateNO}</div>
        <div>{estimateDate}</div>
      </div>
      <div className="text-xl">
        {client.firstName} {client.lastName}
      </div>
      <div className="my-4">{summary}</div>

      <div className="text-green-500">${total}</div>
      <div className={invoiced ? "text-green-500" : "text-red-500"}>
        {invoiced ? "Invoiced" : "Not Invoiced"}
      </div>
      <div className="flex justify-center gap-2 my-2">
        <Link href="/estimates/new-estimate">
          <div>
            <TextButton className="bg-yellow-500 hover:bg-yellow-400">
              <div>View</div>
            </TextButton>
          </div>
        </Link>
        <IconButton
          className="bg-red-500 hover:bg-red-400"
          onClick={() => onDelete()}
        >
          <TrashIcon />
        </IconButton>
      </div>
    </Card>
  );
}

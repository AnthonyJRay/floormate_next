import Card from "./";
import { TrashIcon } from "@heroicons/react/24/outline";
import { IconButton, TextButton } from "@/ui/button";

export default function EstimateCard({ data, className }) {
  const defaultClassName = "flex flex-col gap-1 m-2 bg-gray-800";
  return (
    <Card className={`${defaultClassName} ${className}`}>
      <div className="flex justify-between m-1">
        <div>#{data.estimateNO}</div>
        <div>{data.estimateDate}</div>
      </div>
      <div className="text-xl">
        {data.client.firstName} {data.client.lastName}
      </div>
      <div className="my-4">{data.summary}</div>
      <div className="text-green-500">${data.total}</div>
      <div className="flex justify-center gap-2 my-2">
        <TextButton className="bg-yellow-500 hover:bg-yellow-400">
          View
        </TextButton>
        <IconButton className="bg-red-500 hover:bg-red-400">
          <TrashIcon />
        </IconButton>
      </div>
    </Card>
  );
}

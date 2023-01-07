import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { EstimateCard, InvoiceCard } from "@/ui/card";
import { TextButton } from "@/ui/button";

export default function Estimates() {
  const [estimateData, setEstimateData] = useState([
    {
      estimateNO: "001",
      estimateDate: "03/22/22",
      client: {
        firstName: "Vincent",
        lastName: "Ray",
        address: "123 N Main St",
        phone: "5555551234",
        email: "vincentR@example.com",
      },
      lineItems: [
        {
          name: "Install Carpet",
          description: "Install new carpet in master bedroom",
          quantity: "40",
          rate: "9.00",
          total: "380",
        },
      ],
      summary:
        "Remove and dispose of old carpet. Inspect tackstrip, replace as neccessary. Install new padding and carpet.",
      notes: "Will need at least 14' of seam tape.",
      invoiced: false,
      subtotal: "380",
      tax: "5%",
      total: "399",
    },
    {
      estimateNO: "002",
      estimateDate: "06/14/22",
      client: {
        firstName: "Dee",
        lastName: "D",
        address: "555 S Cherry Dr",
        phone: "123 777 5555",
        email: "deeD@example.com",
      },
      lineItems: [
        {
          name: "Install LVP",
          description: "Install new LVP in kitchen area.",
          quantity: "300",
          rate: "2.00",
          total: "600",
        },
        {
          name: "Install LVP",
          description: "Install new LVP in kitchen area.",
          quantity: "200",
          rate: "2.00",
          total: "400",
        },
      ],
      summary:
        "Remove existing sheet vinyl flooring and dispose. Remove existing quarter-round. Inspect subfloor. Prep and sweep subfloor. Install new LVP. Install new quarter-round.",
      notes:
        "Don't forget CA Glue for quarter-round mitered corners. Don't forget caulking.",
      invoiced: true,
      subtotal: "600",
      tax: "5%",
      total: "630",
    },
  ]);

  return (
    <div className="text-center">
      <h1>Estimates</h1>
      <p>This is the Estimates page.</p>
      <div className="w-full text-center">
        <TextButton className="bg-green-500 hover:bg-green-400">
          <div className="flex items-center gap-1">
            <PlusCircleIcon className="w-5 text-white" />
            <div>Add Estimate</div>
          </div>
        </TextButton>
      </div>
      <div>
        <EstimateCard className="w-24 h-24 border-1 bg-blue-500">
          This is an Estimate Card component
        </EstimateCard>
        <InvoiceCard>This is an Invoice Card component</InvoiceCard>
      </div>
    </div>
  );
}

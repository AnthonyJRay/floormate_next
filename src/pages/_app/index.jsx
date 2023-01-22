import "./globals.css";
import { useState } from "react";
import Dashboard from "@/features/dashboard";

const defaultValues = {
  user: {
    userID: "",
    userEmail: "",
    userPassword: "",
    userFirstName: "",
    userLastName: "",
    userAddress: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    userBusiness: {
      businessName: "",
      businessAddress: "",
      businessLogo: "",
    },
  },
  expenses: [
    {
      expenseID: "",
      expenseDate: "",
      expenseName: "",
      expenseDescription: "",
      expenseCost: "",
    },
  ],
  estimates: [
    {
      estimateID: "",
      estimateDate: "",
      client: {
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
      },
      lineItems: [
        {
          name: "",
          description: "",
          quantity: "",
          rate: "",
          total: "",
        },
      ],
      summary: "",
      notes: "",
      invoiced: false,
      subtotal: "",
      tax: "",
      total: "",
    },
  ],
};

const estimateValues = [
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
      lastName: "Thompson",
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
  {
    estimateNO: "003",
    estimateDate: "07/03/22",
    client: {
      firstName: "Anthony",
      lastName: "Eriksen",
      address: "789 S Blue Ln",
      phone: "333 456 7890",
      email: "anthony@example.com",
    },
    lineItems: [
      {
        name: "Install Hardwood Flooring",
        description:
          "Install new Hardwood flooring throughout main floor area.",
        quantity: "1100",
        rate: "4.00",
        total: "4400",
      },
      {
        name: "Remove Carpet",
        description: "Remove and Dispose of existing Carpet and Padding",
        quantity: "1100",
        rate: "0.25",
        total: "275",
      },
    ],
    summary:
      "Remove existing carpet and padding. Prep subfloor for hard surface installation. Install underlayment. Install hardwood.",
    notes: 'Job will need 1 case of 2" cleat nails.',
    invoiced: true,
    subtotal: "4675",
    tax: "5%",
    total: "4908.75",
  },
];

export default function App({ Component, pageProps }) {
  const [values, setValues] = useState(estimateValues);
  return (
    <Dashboard>
      <Component
        values={values}
        setValues={setValues}
        testValues={defaultValues}
        {...pageProps}
      />
    </Dashboard>
  );
}

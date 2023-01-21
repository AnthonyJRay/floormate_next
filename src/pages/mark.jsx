import { useState } from "react";

const defaultItemValues = {
  name: "",
  description: "",
  quantity: 0,
  rate: 0,
};

export const defaultValues = {
  customer: {
    firstName: "",
    lastName: "",
    email: "",
  },
  summary: "",
  lineItems: [defaultItemValues],
  notes: "",
};

export default function MarkPage() {
  const [values, setValues] = useState(defaultValues);
  return (
    <div className="w-full border p-4 border-gray-200 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <TextField
          value={values.customer.firstName}
          onChange={(firstName) =>
            setValues((prev) => ({
              ...prev,
              customer: {
                ...prev.customer,
                firstName,
              },
            }))
          }
        />

        <TextField
          value={values.customer.lastName}
          onChange={(lastName) =>
            setValues((prev) => ({
              ...prev,
              customer: {
                ...prev.customer,
                lastName,
              },
            }))
          }
        />

        <TextField
          value={values.customer.email}
          onChange={(email) =>
            setValues((prev) => ({
              ...prev,
              customer: {
                ...prev.customer,
                email,
              },
            }))
          }
        />
      </div>

      <div className="w-full ">
        <button
          onClick={() =>
            setValues((prev) => ({
              ...prev,
              lineItems: [defaultItemValues, ...prev.lineItems],
            }))
          }
          className="border bg-blue-500 hover:bg-blue-400 py-1 px-6 flex items-center border-sm text-white"
        >
          Add new
        </button>
        {/* Instead of item, destructure the variables you need out of the item */}
        {values.lineItems.map(({ name, description, rate, quantity }, i) => (
          <div className="w-full flex items-center gap-1">
            <div className="w-1/6">
              <TextField
                value={name}
                onChange={(_name) =>
                  setValues((prev) => ({
                    ...prev,
                    lineItems: prev.lineItems.map((prevItem, _i) =>
                      _i === i ? { ...prevItem, name: _name } : prevItem
                    ),
                  }))
                }
              />
            </div>
            <div className="flex-grow">
              <TextField
                value={description}
                onChange={(_description) =>
                  setValues((prev) => ({
                    ...prev,
                    lineItems: prev.lineItems.map((prevItem, _i) =>
                      _i === i
                        ? { ...prevItem, description: _description }
                        : prevItem
                    ),
                  }))
                }
              />
            </div>
            <div className="w-16">
              <NumberField
                value={quantity}
                onChange={(_quantity) =>
                  setValues((prev) => ({
                    ...prev,
                    lineItems: prev.lineItems.map((prevItem, _i) =>
                      _i === i ? { ...prevItem, quantity: _quantity } : prevItem
                    ),
                  }))
                }
              />
            </div>
            <div className="w-16">
              <NumberField
                value={rate}
                onChange={(_rate) =>
                  setValues((prev) => ({
                    ...prev,
                    lineItems: prev.lineItems.map((prevItem, _i) =>
                      _i === i ? { ...prevItem, rate: _rate } : prevItem
                    ),
                  }))
                }
              />
            </div>

            <div className="flex-grow">{rate * quantity}</div>

            <button
              onClick={() =>
                setValues((prev) => ({
                  ...prev,
                  lineItems: prev.lineItems.filter((_, _i) => _i !== i),
                }))
              }
              className="border bg-blue-500 hover:bg-blue-400 py-1 px-6 flex items-center border-sm text-white"
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function TextField({ value, onChange = () => {} }) {
  return (
    <input
      className="w-full border border-gray-300 p-1"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function NumberField({ value, onChange = () => {} }) {
  return (
    <TextField
      value={value}
      onChange={(text) => onChange(text.replace(/[^0-9]/, ""))}
    />
  );
}

import { useState } from "react";

export function Success({}) {
  const [show, setShow] = useState(false);
  const defaultClassNames =
    "absolute z-10 inset-48 bg-gray-200 items-center justify-center rounded drop-shadow-xl";
  return (
    <div className={`${defaultClassNames} ${show ? "flex" : "hidden"}`}>
      <div>Saved Successfully!</div>
    </div>
  );
}

import { useRef, useEffect } from "react";

import SelectField from "../select";
import AddressField from "../address";
export { SelectField, AddressField };

export default function TextField({
  type = "text",
  focused = false,
  className,
  value,
  onChange = () => {},
  ...rest
}) {
  const defaultClassNames =
    "border text-gray-700 rounded-sm p2 w-full shadow-sm";
  const ref = useRef();
  useEffect(() => {
    if (!focused) return;
    ref.current?.focus();
  }, [focused]);
  return (
    <>
      <input
        ref={ref}
        type={type}
        className={`${defaultClassNames} ${className}`}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </>
  );
}

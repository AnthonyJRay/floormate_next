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
  placeholder,
  ...rest
}) {
  const defaultClassNames =
    "border w-1/2 text-gray-700 rounded-sm p-1 shadow-sm";
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
        placeholder={placeholder}
        className={`${defaultClassNames} ${className}`}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </>
  );
}

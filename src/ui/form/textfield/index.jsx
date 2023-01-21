import SelectField from "../select";
import AddressField from "../address";
export { SelectField, AddressField };

export default function TextField({
  value,
  type = "text",
  className = "",
  onChange = () => {},
  ...rest
}) {
  const defaultClassNames = "border-b-2 text-gray-700 rounded-sm p-1 shadow-sm";

  return (
    <>
      <input
        className={`${defaultClassNames} ${className}`}
        type={type}
        // value={value}
        onChange={onChange}
        {...rest}
      />
    </>
  );
}

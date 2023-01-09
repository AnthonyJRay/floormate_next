import SelectField from "../select";
import AddressField from "../address";
export { SelectField, AddressField };

export default function TextField({
  type = "text",
  className,
  onChange = () => {},
  ...rest
}) {
  const defaultClassNames = "border text-gray-700 rounded-sm p-1 shadow-sm";

  return (
    <>
      <input
        type={type}
        className={`${defaultClassNames} ${className}`}
        onChange={onChange}
        {...rest}
      />
    </>
  );
}

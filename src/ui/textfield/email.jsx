import Textfield from "./";

export default function EmailField({
  value = "",
  onChange = () => {},
  ...rest
}) {
  return (
    <Textfield type={"email"} value={value} onChange={onChange} {...rest} />
  );
}

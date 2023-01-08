import Textfield from "./";

export default function PasswordField({ value = "", onChange = () => {} }) {
  return <Textfield type={"password"} value={value} onChange={onChange} />;
}

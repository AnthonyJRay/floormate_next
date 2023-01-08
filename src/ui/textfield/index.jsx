import EmailField from "./email";
import PasswordField from "./password";
import SelectField from "./select";
export { EmailField, PasswordField, SelectField };

export default function Textfield({ type = "", placeholder = "", ...rest }) {
  const defaultStyles = "w-2/3";
  return (
    <div>
      <label className={"w-1/3"}>{`${placeholder}:`}</label>
      <input type={"text" || type} className={`${defaultStyles}`} {...rest} />
    </div>
  );
}

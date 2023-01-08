import EmailField from "./email";
import PasswordField from "./password";
import SelectField from "./select";
export { EmailField, PasswordField, SelectField };

export default function Textfield({ type = "", placeholder = "", ...rest }) {
  return (
    <div>
      <label>
        {`${placeholder}:`}
        <input type={"text" || type} {...rest} />
      </label>
    </div>
  );
}

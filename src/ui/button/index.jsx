import IconButton from "./icon";
import TextButton from "./text";
export { IconButton, TextButton };

export default function Button({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}

import IconButton from "./icon";
import TextButton from "./text";
export { IconButton, TextButton };

export default function Button({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}

// ("bg-green-600 px-6 py-1 hover:bg-green-500");

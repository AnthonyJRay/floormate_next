import Button from "./";

export default function IconButton({ children, className }) {
  const defaultClassName =
    "rounded p-1 text-white transition-all duration-300 opacity-90 hover:opacity-100 drop-shadow-md";

  return (
    <Button className={`${defaultClassName} ${className}`}>{children}</Button>
  );
}

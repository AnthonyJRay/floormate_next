import Button from "./";

export default function TextButton({ children, className }) {
  const defaultClassName =
    "px-6 py-1  rounded  text-white transition-all duration-300 opacity-90 hover:opacity-100 drop-shadow-md";
  return (
    <Button className={`${defaultClassName} ${className}`}>{children}</Button>
  );
}

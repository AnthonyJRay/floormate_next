import Button from "./";

export default function IconButton({ children, className, onClick }) {
  const defaultClassName =
    "rounded w-8 p-1 text-white transition-all duration-300 opacity-90 hover:opacity-100 drop-shadow-md";

  return (
    <Button className={`${defaultClassName} ${className}`} onClick={onClick}>
      {children}
    </Button>
  );
}

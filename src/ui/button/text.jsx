import Button from "./";

export default function TextButton({ children, className, type, onClick }) {
  const defaultClassName =
    "px-6 py-1 rounded text-white transition-all duration-300 opacity-90 hover:opacity-100 drop-shadow-md";
  return (
    <Button
      className={`${className} ${defaultClassName}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

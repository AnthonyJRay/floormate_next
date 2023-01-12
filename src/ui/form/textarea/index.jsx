export default function TextArea({ className, ...rest }) {
  const defaultClassNames = "text-gray-700";
  return (
    <textarea
      className={`${defaultClassNames} ${className}`}
      {...rest}
    ></textarea>
  );
}

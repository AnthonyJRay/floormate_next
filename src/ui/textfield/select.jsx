export default function SelectField(
  { options, className, defaultValue },
  ...rest
) {
  const defaultStyles = "text-gray-600";

  return (
    <select className={defaultStyles} defaultValue={defaultValue}>
      {options.map((option, i) => {
        return (
          <option key={i} {...rest}>
            {option}
          </option>
        );
      })}
    </select>
  );
}

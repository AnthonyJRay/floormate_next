export default function SelectField({ options, className }, ...rest) {
  const defaultStyles = "text-gray-600";

  return (
    <select className={defaultStyles}>
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

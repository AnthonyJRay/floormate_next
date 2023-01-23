export default function NewTextField({ value, onChange = () => {} }) {
  return (
    <input
      type="text"
      className={"w-full border border-gray-300 rounded p-1 drop-shadow-md"}
      value={value}
      onChange={onChange}
    />
  );
}

export default function withLabel(Component) {
  const defaultLabelClasses =
    "flex items-center w-3/12 md:w-2/12 text-left text-md font-bold";
  const defaultInputClasses = "w-9/12 md:w-11/12 border-b-2 p-2 m-2";
  return function WrappedComponent({ children, ...rest }) {
    return (
      <>
        <label className={defaultLabelClasses}>{children}</label>
        <Component className={defaultInputClasses} {...rest} />
      </>
    );
  };
}

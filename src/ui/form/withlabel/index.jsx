export default function withLabel(Component) {
  const defaultLabelClasses = "flex items-center text-left text-md font-bold";
  const defaultInputClasses = "border-b-2 w-full my-1 py-2";
  return function WrappedComponent({
    children,
    componentClassName,
    labelClassName,
    ...rest
  }) {
    return (
      // <div className={"w-full md:py-2"}>
      <>
        <label className={`${defaultLabelClasses}`}>{children}</label>
        <Component className={`${defaultInputClasses}`} {...rest} />
      </>
      // </div>
    );
  };
}

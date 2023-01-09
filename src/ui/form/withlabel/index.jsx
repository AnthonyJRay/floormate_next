export default function withLabel(Component) {
  const defaultLabelClasses = "text-left p-1 text-sm";
  const defaultInputClasses = "rounded-b-md border-0 border-b-2";
  return function WrappedComponent({ children, ...rest }) {
    return (
      <>
        <label className={defaultLabelClasses}>{children}</label>
        <Component className={defaultInputClasses} {...rest} />
      </>
    );
  };
}

export default function withLabel(Component) {
  const defaultClassNames = "text-left p-1 text-sm";
  return function WrappedComponent({ children, ...rest }) {
    return (
      <>
        <label className={defaultClassNames}>{children}</label>
        <Component {...rest} />
      </>
    );
  };
}

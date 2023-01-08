export default function Card({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

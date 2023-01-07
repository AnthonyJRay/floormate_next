import EstimateCard from "./estimate-card";
import InvoiceCard from "./invoice-card";
export { EstimateCard, InvoiceCard };

export default function Card({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

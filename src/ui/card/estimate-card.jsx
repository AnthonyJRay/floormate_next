import Card from "./";

export default function EstimateCard({ children, className }) {
  return <Card className={`${className}`}>{children}</Card>;
}

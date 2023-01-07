import Card from "./";

export default function EstimateCard({ children, className }) {
  // const defaultClassName = "flex flex-col grow basis-0 gap-1 m-1 bg-gray-800";
  return <Card className={`${defaultClassName} ${className}`}>{children}</Card>;
}

import TextArea from "@/ui/form/textarea";
import withLabel from "@/ui/form/withlabel";

const SummaryField = withLabel(TextArea);

export default function Summary({ values, setValues }) {
  const { summary } = values;
  function summaryHandler(e) {
    const { value, name } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className={"md:w-1/2"}>
      <div className={"h-full"}>
        <SummaryField
          name={"summary"}
          placeholder={"Enter the scope of work"}
          value={summary}
          onChange={(e) => summaryHandler(e)}
        >
          <div className={"text-lg p-1"}>Job Summary</div>
        </SummaryField>
      </div>
    </div>
  );
}

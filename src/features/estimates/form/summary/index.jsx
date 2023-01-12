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
    <div className={"flex flex-col md:w-1/2 p-4 border-2 rounded"}>
      <div className={"h-full overflow-hidden"}>
        <SummaryField
          className={"h-full w-full"}
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

import TextBox from "@/ui/form/textbox";
import withLabel from "@/ui/form/withlabel";

const SummaryField = withLabel(TextBox);

export default function Summary({ summary, setValues }) {
  console.log(summary);
  function summaryHandler(e) {
    const { value, name } = e.target;
    console.log(value);
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className={"flex flex-col text-sm md:w-1/2 p-4 border-2 rounded"}>
      <div className={"h-full overflow-hidden"}>
        <SummaryField
          className={"h-full w-full p-1"}
          name={"summary"}
          placeholder={"Enter the scope of work... "}
          value={summary}
          onChange={(e) => summaryHandler(e)}
        >
          <div className={"text-lg p-1 w-full text-center"}>Summary</div>
        </SummaryField>
      </div>
    </div>
  );
}

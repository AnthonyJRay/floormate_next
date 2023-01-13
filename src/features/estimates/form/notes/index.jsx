import TextBox from "@/ui/form/textbox";
import withLabel from "@/ui/form/withlabel";

const NotesField = withLabel(TextBox);

export default function Notes({ values, setValues }) {
  const { notes } = values;
  function notesHandler(e) {
    const { value, name } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <NotesField
      name={"notes"}
      value={notes}
      className={"text-sm border-b-2 p-2"}
      onChange={(e) => notesHandler(e)}
    >
      <div className={"text-lg p-1 w-full text-center"}>Additional Notes</div>
    </NotesField>
  );
}

import TextBox from "@/ui/form/textbox";
import withLabel from "@/ui/form/withlabel";

const NotesField = withLabel(TextBox);

export default function Notes({ notes, setValues }) {
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
      className={"text-sm border-2 p-2"}
      onChange={(e) => notesHandler(e)}
    >
      <div className={"text-lg p-1 w-full text-center"}>Additional Notes</div>
    </NotesField>
  );
}

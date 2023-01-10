import TextArea from "@/ui/form/textarea";
import withLabel from "@/ui/form/withlabel";

const NotesField = withLabel(TextArea);

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
    <NotesField name={"notes"} value={notes} onChange={(e) => notesHandler(e)}>
      <div className={"text-lg p-1"}>Additional Notes:</div>
    </NotesField>
  );
}

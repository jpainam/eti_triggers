import { deleteRecording } from "@/app/actions/recordings";

export default function DeleteForm({ id: string }: { id: string }) {
  return (
    <form>
      <input type="hidden" name="id" value={string} />
      <button type="submit">Delete</button>
    </form>
  );
}

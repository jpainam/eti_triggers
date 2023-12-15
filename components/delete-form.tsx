'use client'
import { deleteRecording } from "@/app/actions/recordings";
import { Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

export default function DeleteForm({ id }: { id?: number }) {
  const deleteTrial = async () => {
    if (id) {
      await deleteRecording(id);
    }
  };
  return (
    <Button onClick={deleteTrial} variant="danger" type="submit">
      <Trash />
    </Button>
  );
}

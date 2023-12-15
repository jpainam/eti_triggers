import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";


export async function createRecordings(prevState: any, formData: FormData) {
  const schema = z.object({
    participant: z.string().min(1),
    session: z.string().min(1),
    startTime: z.string().min(1),
    recordingStartTime: z.string().min(1),
    recordingEndTime: z.string().min(1),
  });

  const data = schema.parse({
    participant: formData.get("participant"),
    session: formData.get("session"),
    startTime: formData.get("startTime"),
    recordingStartTime: formData.get("recordingStartTime"),
    recordingEndTime: formData.get("recordingEndTime"),
  });
  try {
    await sql`
            INSERT INTO recordings(participant, session, startTime, recordingStartTime, recordingEndTime) 
            VALUES (${data.participant}, 
                ${data.session}, 
                ${data.startTime},
                ${data.recordingStartTime}, 
                ${data.recordingEndTime})
            `;
    revalidatePath("/");
    return { message: "Recording created successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Failed to create recording" };
  }
}

export async function deleteRecording(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.string().min(1),
  });

  const data = schema.parse({
    id: formData.get("id"),
  });
  try {
    await sql`
                DELETE FROM recordings WHERE id = ${data.id}
                `;
    revalidatePath("/");
    return { message: "Recording deleted successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Failed to delete recording" };
  }
}

'use server';
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export type CreateRecordingData = {
  participant: string;
  session: string;
  startTime: string;
  recordingStartTime: string;
  recordingEndTime: string;
};
export async function createRecordings(data: CreateRecordingData) {
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

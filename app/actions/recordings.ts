"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export type CreateRecordingData = {
  id?: number;
  participant: string;
  session: string;
  startTime: string;
  recordingStartTime: string;
  recordingEndTime: string;
};

export async function getRecordings() {
  try {
    const result = await sql`
        SELECT * FROM recordings
        `;
    const { rows } = result;
    return rows as CreateRecordingData[];
  } catch (error) {
    console.log(error);
    throw Error("Failed to list recordings");
  }
}

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

export async function deleteRecording(id: number) {
  try {
    await sql`
                DELETE FROM recordings WHERE id = ${id}
                `;
    revalidatePath("/");
    return { message: "Recording deleted successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Failed to delete recording" };
  }
}

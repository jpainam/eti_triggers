'use server';
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function getLastSession() {
  const result = await sql`
    SELECT * FROM sessions ORDER BY "startTime" DESC LIMIT 1;
    `;
  const { rows } = result;
  if (rows.length === 0) return { message: "No sessions found" };
  return rows[0];
}

export async function createSession(session: string) {
  try {
    console.log("session", session);
    console.log("Starting creating sessions")
    const result = await sql`
    INSERT INTO sessions(name, "startTime", "endTime", status) 
    VALUES (${session}, NOW(), NULL, 'running') RETURNING *;
    `;
    const { rows } = result;
    revalidatePath("/");
    return { message: `Session successfully created ` };
  } catch (error) {
    console.error(error); 
    return { message: `Failed to create a session` };
  }
}
export async function endSession(id: number) {
  try {
    const result = await sql`
    UPDATE sessions SET "endTime" = NOW(), status = 'stopped' WHERE id = ${id} RETURNING *;
    `;
    const { rows } = result;
    revalidatePath("/");
    return { message: `Session successfully ended ` };
  } catch (error) {
    return { message: `Failed to stop a session` };
  }
}

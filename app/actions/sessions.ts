import { sql } from "@vercel/postgres";

export async function getLastSession() {
  try {
    const result = await sql`
        SELECT * FROM sessions ORDER BY "startTime" DESC LIMIT 1;
        `;
    const { rows } = result;
    return rows;
  } catch (err) {
    console.error("Error getting last session:", err);
    throw err;
  }
}

export async function startSession(sessionName: string){
  try {
    const result = await sql`
        INSERT INTO sessions(name, "startTime", "endTime") VALUES (${sessionName}, NOW(), NULL) RETURNING *;
        `;
    const { rows } = result;
    return rows;
  } catch (err) {
    console.error("Error starting session:", err);
    throw err;
  }
}
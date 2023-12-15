'use server';
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function getLastTrial() {
  const result = await sql`
    SELECT * FROM recordings ORDER BY "recordingstarttime" DESC LIMIT 1;
    `;
  const { rows } = result;
  if (rows.length === 0) return { message: "No recording found" };
  return rows[0];
}
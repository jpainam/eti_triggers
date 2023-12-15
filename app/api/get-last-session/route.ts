import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`
          SELECT * FROM sessions ORDER BY "startTime" DESC LIMIT 1;
          `;
    const { rows } = result;
    if (rows.length === 0) {
      return NextResponse.json({ message: "No sessions found" }, { status: 200 });
    }
    return NextResponse.json(rows[0], { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

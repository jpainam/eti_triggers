import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const migrateResult = await sql`
      CREATE TABLE IF NOT EXISTS recordings (
        id SERIAL PRIMARY KEY,
        participant VARCHAR(255) NOT NULL,
        session VARCHAR(255) NOT NULL,
        startTime VARCHAR(255) NOT NULL,
        recordingStartTime VARCHAR(255) NOT NULL,
        recordingEndTime VARCHAR(255) NOT NULL
      );
      `;
    /*await sql`CREATE TABLE IF NOT EXISTS sessions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL DEFAULT 'stopped',
        "startTime" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        "endTime" TIMESTAMP WITH TIME ZONE DEFAULT NULL
      );
      `;*/

    return NextResponse.json(
      { message: `Successfully created ${migrateResult} tables` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

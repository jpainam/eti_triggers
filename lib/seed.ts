import { sql } from "@vercel/postgres";

export async function seed() {
  try {
    const migrateResult = await sql`
    CREATE TABLE IF NOT EXISTS recordings (
      id SERIAL PRIMARY KEY,
      participant VARCHAR(255) NOT NULL,
      session VARCHAR(255) UNIQUE NOT NULL,
      startTime TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      recordingStartTime TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      recordingEndTime TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `
    await sql `CREATE TABLE IF NOT EXISTS sessions (
      id SERIAL PRIMARY KEY,
      session VARCHAR(255) UNIQUE NOT NULL,
      "startTime" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      "endTime" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;

    console.log(`Successfully created ${migrateResult} tables`);
    return migrateResult;
  } catch (err) {
    console.error("Error creating tables:", err);
    throw err;
  }
}

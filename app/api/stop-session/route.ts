import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { session_id } = body;
  try {
    const result = await sql`
          UPDATE sessions SET status = 'stopped', 
          "endTime" = NOW() WHERE id = ${session_id} RETURNING *;
          `;
    const { rows } = result;
    revalidatePath("/");
    return NextResponse.json(
      { message: `Session successfully stopped ` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

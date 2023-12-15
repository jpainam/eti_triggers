import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { session }  = body ;
  try {
    const result = await sql`
        INSERT INTO sessions(name, "startTime", "endTime", status) 
        VALUES (${session}, NOW(), NULL, 'running') RETURNING *;
        `;
    const { rows } = result;
    revalidatePath("/");
    return NextResponse.json(
      { message: `Session successfully created ` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(request: Request) {
}

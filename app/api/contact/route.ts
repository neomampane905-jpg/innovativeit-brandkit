import { NextResponse } from "next/server";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";

const submissionSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  service: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(10),
});

const dataFilePath = path.join(process.cwd(), "data", "submissions.json");

export async function POST(request: Request) {
  const body = await request.json();
  const result = submissionSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const submission = { ...result.data, submittedAt: new Date().toISOString() };

  try {
    const existing = await fs.readFile(dataFilePath, "utf-8");
    const submissions = existing ? JSON.parse(existing) : [];
    submissions.push(submission);
    await fs.writeFile(dataFilePath, JSON.stringify(submissions, null, 2));
  } catch (error) {
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
    await fs.writeFile(dataFilePath, JSON.stringify([submission], null, 2));
  }

  return NextResponse.json({ ok: true });
}

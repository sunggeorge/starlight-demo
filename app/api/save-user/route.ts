// app/api/save-user/route.ts
import { NextResponse } from "next/server";
import prisma from "../../_utils/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, firstName, lastName, email, phone, role } = body;

    // Save user to the database
    await prisma.user.create({
      data: {
        id,
        firstName,
        lastName,
        email,
        phone,
        role,
      },
    });

    return NextResponse.json({ message: "User saved successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: "Failed to save user" }, { status: 500 });
  }
}
import prisma from "@/prisma/client";
import { useUser } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await currentUser();
  const { userId } = auth();
  if (!userId)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const res = await prisma.user.create({
    data: {
      userId,
      blog: {
        create: {
          title: `${body?.title}`,
          description: body?.content,
          author: `${user?.fullName}`,
        },
      },
    },
  });

  return NextResponse.json('res');
}

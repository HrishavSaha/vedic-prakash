import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient()

export async function GET() {
    try {
        const contactInfo = await prisma.contactInfo.findFirst()
        return NextResponse.json(contactInfo)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error: "Failed to fetch contact info",
                message: error
             },
            { status: 500 }
        )
    }
}
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET() {
    try {
        const contactInfo = await prisma.contactInfo.findFirst()
        return NextResponse.json(contactInfo)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Failed to fetch contact info" },
            { status: 500 }
        )
    }
}
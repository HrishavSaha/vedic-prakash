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

export async function POST(request: Request) {
    try {
        const { phone, email, address, mapEmbed } = await request.json()

        const contactInfo = await prisma.contactInfo.upsert({
            where: { id: 1 },
            update: { phone, email, address, mapEmbed},
            create: { phone, email, address, mapEmbed}
        })

        return NextResponse.json(contactInfo)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Failed to update contact info" },
            { status: 500 }
        )
    }
}

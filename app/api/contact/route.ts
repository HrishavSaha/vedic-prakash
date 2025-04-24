import { Resend } from "resend"
import { PrismaClient } from "@/generated/prisma"
import { NextResponse } from "next/server"

import { queryEmail } from "@/types/site-data"

const resend = new Resend(process.env.RESEND_API_KEY)
const prisma = new PrismaClient()

export async function POST(request: Request) {
    try {
        const data = await request.json()

        await resend.emails.send({
            from: 'VedicPrakash <query@resend.dev>',
            to: [queryEmail],
            subject: `Query-${data.name}`,
            html: `<p>Name: ${data.name} <br/> Email: ${data.email} <br/> Phone: ${data.phone} <br/> Query: ${data.message}</p>`,
        });

        const record = await prisma.queryRecord.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message,
            }
        })
        return NextResponse.json({
            success: true,
            record
        })
    } catch (error) {
        console.error('Error creating record:', error)
        return NextResponse.json(
            { error: 'Failed to create record' },
            { status: 500 }
        )
    }
}
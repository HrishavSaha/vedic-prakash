import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET() {
    const cards = await prisma.card.findMany()
    return Response.json(cards)
}
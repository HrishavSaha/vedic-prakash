import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
    await prisma.card.createMany({
        data: [
            { title: 'First Card', content: 'This is the first card.'},
            { title: 'Second Card', content: 'This is the second card.'},
        ]
    })
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect())
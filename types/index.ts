export type ContactInfo = {
    phone: string
    email: string
    address: string
    mapEmbed?: string
    createdAt?: string
    updatedAt?: string
}

export type Service = {
    id: number
    title: string
    description: string
    image: string
    readMoreLink: string
}
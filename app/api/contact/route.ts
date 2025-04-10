import { Resend } from "resend"
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    const { name, email, message } = await request.json()
    console.log(name, email)
    await resend.emails.send({
        from: "your-email@example.com",
        to: 'your-email@gmail.com',
        subject: 'New Contact Form Submission',
        text: message,
    })
    return Response.json({success: true})
}
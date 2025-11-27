import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Log the payload as requested
        console.log("Contact Form Submission:", { name, email, message });

        // In a real application, you would send an email here using EmailJS or Nodemailer
        // For now, we simulate a successful response

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to process request" },
            { status: 500 }
        );
    }
}

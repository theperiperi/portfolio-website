import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate required fields (name and message are required, email is optional)
        if (!name || !message) {
            return NextResponse.json(
                { error: 'Name and message are required' },
                { status: 400 }
            );
        }

        // Basic email validation - only if email is provided
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return NextResponse.json(
                    { error: 'Invalid email address' },
                    { status: 400 }
                );
            }
        }

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // You'll update this with your domain
            to: [process.env.CONTACT_EMAIL || 'your-email@example.com'], // Your email
            replyTo: email || undefined, // Visitor's email for easy replies (if provided)
            subject: `New Contact Form Message from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email || 'Not provided'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        return NextResponse.json(
            { success: true, data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { 
      name, 
      email, 
      startupName, 
      startupStage, 
      designPriority, 
      budget, 
      message 
    } = await req.json();

    if (!name || !email || !startupName || !budget) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const LOGO_URL = "https://rushweb-six.vercel.app/images/logoWithname.png"; 

    // 1. ADMIN NOTIFICATION (Sent to your cPanel email)
    await resend.emails.send({
      from: "Rush Web Studios <noreply@rushwebstudios.com>",
      to: "admin@rushwebstudios.com", // Updated from Gmail to cPanel Email
      replyTo: email,
      subject: `🚀 New Lead: ${name} (${startupName})`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; color: #1a1a1a;">
          <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; background-color: #ffffff;">
            <h2 style="font-size: 18px; font-weight: 700; margin-bottom: 20px; color: #111827; border-bottom: 1px solid #f3f4f6; padding-bottom: 12px;">New Inquiry Details</h2>
            
            <p style="margin: 10px 0;"><strong style="color: #4b5563;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #4b5563;">Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #4b5563;">Startup:</strong> ${startupName}</p>
            <p style="margin: 10px 0;"><strong style="color: #4b5563;">Stage:</strong> ${startupStage}</p>
            <p style="margin: 10px 0;"><strong style="color: #4b5563;">Priority:</strong> ${designPriority}</p>
            <p style="margin: 10px 0;"><strong style="color: #4b5563;">Budget:</strong> ${budget}</p>

            <div style="margin-top: 20px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #f3f4f6;">
              <p style="font-weight: 600; margin-bottom: 8px; color: #111827;">Additional Message:</p>
              <p style="color: #374151; line-height: 1.5; margin: 0;">${message || "No additional message provided."}</p>
            </div>
          </div>
        </div>
      `,
    });

    // 2. USER THANK YOU EMAIL (Professional UI)
    await resend.emails.send({
      from: "Rush Web Studios <admin@rushwebstudios.com>",
      to: email,
      subject: `We've received your request - Rush Web Studios`,
      html: `
        <div style="background-color: #f8fafc; padding: 40px 0; font-family: 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
            
            <div style="padding: 40px 20px; text-align: center; background-color: #ffffff;">
              <img src="${LOGO_URL}" alt="Rush Web Studios" style="max-width: 200px; height: auto;" />
            </div>
            
            <div style="padding: 0 40px 40px 40px; color: #334155;">
              <h1 style="font-size: 24px; font-weight: 700; color: #0f172a; margin-bottom: 16px; text-align: center;">Hello ${name},</h1>
              <p style="font-size: 16px; line-height: 1.6; color: #64748b; text-align: center; margin-bottom: 30px;">
                Thank you for reaching out to <strong>Rush Web Studios</strong>. We have received your inquiry for <strong>${startupName}</strong> and our team will get back to you within 24 hours.
              </p>
              
              <div style="padding: 24px; background-color: #f1f5f9; border-radius: 12px; border-left: 4px solid #0f172a;">
                <p style="margin: 0 0 10px 0; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Inquiry Summary</p>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px; color: #475569; line-height: 1.8;">
                  <li><strong>Project Focus:</strong> ${designPriority}</li>
                  <li><strong>Target Budget:</strong> ${budget}</li>
                </ul>
              </div>

              <div style="margin-top: 40px; text-align: center;">
                <p style="margin-bottom: 4px; font-weight: 700; color: #0f172a;">Rush Web Studios</p>
                <p style="margin-top: 0; color: #94a3b8; font-size: 14px;">Digital Excellence. Simplified.</p>
              </div>
            </div>

            <div style="padding: 32px; background-color: #0f172a; text-align: center; color: #94a3b8; font-size: 12px;">
              <p style="margin-bottom: 20px; color: #cbd5e1;">© 2025 Rush Web Studios. All rights reserved.</p>
              <a href="https://rushwebstudios.com" style="display: inline-block; color: #ffffff; text-decoration: none; font-weight: 600; padding: 10px 20px; border: 1px solid #334155; border-radius: 8px;">Visit Website</a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Resend Error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
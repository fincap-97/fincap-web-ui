import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, phone, email, subject, message, type } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Admin mail (tumhe milega)
        //     await transporter.sendMail({
        //         from: process.env.EMAIL_USER,
        //         to: process.env.EMAIL_USER,
        //         subject: `New Inquiry - ${type}`,
        //         html: `
        //     <h2>New Contact Inquiry</h2>
        //     <p><b>Name:</b> ${name}</p>
        //     <p><b>Phone:</b> ${phone}</p>
        //     <p><b>Email:</b> ${email}</p>
        //     <p><b>Subject:</b> ${subject}</p>
        //     <p><b>Type:</b> ${type}</p>
        //     <p><b>Message:</b> ${message}</p>
        //   `,
        //     });
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Inquiry - ${type}`,
            html: `
    <div style="font-family: Arial, sans-serif; background:#f4f6f9; padding:20px;">
      <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.08);">

        <div style="background: linear-gradient(135deg, #1E3A5F, #E63946); padding:20px; text-align:center;">
          <h1 style="color:#ffffff; margin:0;">Fincap Sol</h1>
          <p style="color:#ffffff;">New Property Inquiry</p>
        </div>

        <div style="padding:20px;">
          <p><b>Name:</b> ${name}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Type:</b> ${type}</p>
          <p><b>Message:</b></p>
          <p style="background:#f4f6f9; padding:10px;">${message}</p>
        </div>

      </div>
    </div>
  `,
        });
        // Auto reply user ko
        if (email) {
            await transporter.sendMail({
                to: email,
                subject: "We received your inquiry",
                html: `
          <p>Hi ${name},</p>
          <p>Thanks for contacting Fincap Sol. Our team will reach out shortly.</p>
          <p><b>Your Query:</b> ${message}</p>
        `,
            });
        }

        return Response.json({ success: true });
    } catch (error) {
        console.log(error);
        return Response.json({ success: false });
    }
}
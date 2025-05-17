import nodemailer from 'nodemailer'

export const sendEmail = async (userEmail, userName, message) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'nirmalperera2509@gmail.com',
            pass: 'jqiq pcku icfx aban',
        },
    });

    let mailOptions = {
        from: '"Nirmal Perera" <nirmalperera2509@gmail.com>',
        to: userEmail,
        subject: 'Thanks for reaching out!',
        html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <div style="text-align: center;">
          <h2 style="color: #333;">Nirmal Perera</h2>
          <p style="color: #888; margin-top: -10px;">Frontend Developer | React & Next.js Enthusiast</p>
        </div>
        <hr style="border: none; border-top: 1px solid #ddd;" />
        <div style="padding: 20px;">
          <h3 style="color: #555;">Hi ${userName},</h3>
          <p style="font-size: 16px; color: #444;">
            Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.
          </p>
          <p style="font-size: 16px; color: #444;">
            If your message was urgent or you'd like to connect faster, feel free to reach out to me directly via <strong>nirmalperera2509@gmail.com</strong>.
          </p>
        </div>
        <hr style="border: none; border-top: 1px solid #ddd;" />
        <p style="text-align: center; color: #aaa; font-size: 12px;">This is an automated confirmation — no need to reply.</p>
      </div>
    </div>
  `,
    };


    await transporter.sendMail(mailOptions);
}
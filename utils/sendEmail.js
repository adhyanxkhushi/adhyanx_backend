import dotenv from "dotenv";
dotenv.config();
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendNewContactEmail(contact) {

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: "New Contact Form Submission",
    html: `
      <h3>New Contact Added</h3>
      <p><strong>Name:</strong> ${contact.firstName} ${contact.lastName}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Phone:</strong> ${contact.phone}</p>
      <p><strong>Message:</strong> ${contact.message}</p>
    `,
  };

  await sgMail.send(msg);
}

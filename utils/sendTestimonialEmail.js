import dotenv from "dotenv";
dotenv.config();
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendNewTestimonialEmail(testimonial) {

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: "New Testimonial Form Submission",
    html: `
      <h3>New Testimonial Added</h3>
      <p><strong>Name:</strong> ${testimonial.name} </p>
      <p><strong>Email:</strong> ${testimonial.email}</p>
      <p><strong>Role:</strong> ${testimonial.role}</p>
      <p><strong>Rating:</strong> ${testimonial.rating}</p>
      <p><strong>Text:</strong> ${testimonial.text}</p>
    `,
  };

  await sgMail.send(msg);
}

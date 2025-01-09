import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import * as handlebars from "handlebars";
import {thankYouTemplate} from "../../lib/templates/thankYou";


interface SendMailParams{
  name: string;
  senderEmail: string;
  subject: string;
  html: string;
}

interface SendMailResponse {
  message: string;
  status: number;
}


async function sendMail({ name, senderEmail, subject, html }: SendMailParams): Promise<SendMailResponse>{
  try {
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
   
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    // Verify the transport
    await transport.verify();
    const finalHtml = compileThankYouTemplate(name,html,"https://www.linkedin.com/in/eduardo-maroto/",senderEmail);

    // Send the email
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: "edu5.maroto@hotmail.com",
      subject,
      html: finalHtml,
    });

    console.log("Email sent successfully:", sendResult);

    // Return success response
    return { message: "Email sent", status: 201 };
  } catch (error) {
    console.error("Error sending email:", error);

    // Return error response
    return { message: "Failed to send email", status: 500 };
  }
}

export async function POST(req: Request): Promise<NextResponse>{
  try {
    const body = await req.json();
    const { name ,to, subject, html } = body;
    const response = await sendMail({ name, senderEmail:to, subject, html });
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "Failed to send email", status: 500 });
  }
}

function compileThankYouTemplate(name: string, message: string, url: string,email: string): string {
  
  const template = handlebars.compile(thankYouTemplate)
  const htmlBody = template({
    name: name,
    message: message,
    url: url,
    email: email,
  });
  return htmlBody; 
}

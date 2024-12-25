import UserModel from '../models/user.model.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export async function postdata(req, res) {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Name, email, and phone are required", 
        error: true,
        success: false,
      });
    }

    const senddata = await UserModel.create({
      name,
      email,
      phone,
      message,
    });

    // Prepare email content
    const emailContent = `
  ==================================
          New Inquiry Details
  ==================================
  Name:       ${name}
  Email:      ${email}
  Phone:      ${phone}
  ----------------------------------
  Message:
  ${message}
  ==================================
`;


    // Send email to the admin
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,  // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email app password
      },
    });



    const mailOptions = {
      from: email, // Always your verified sender email
      replyTo: email,          // This will show the user's email as the reply-to address
      to: process.env.ADMIN_EMAIL, // Admin email
      subject: 'New Contact Form Submission',
      text: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      message: 'Thank you, we will contact you as soon as possible.',
      data: senddata,
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

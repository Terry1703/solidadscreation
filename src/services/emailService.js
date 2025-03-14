import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
  try {
    await emailjs.send(
      'your_service_id', // Replace with your EmailJS Service ID
      'your_template_id', // Replace with your EmailJS Template ID
      formData,
      'your_user_id' // Replace with your EmailJS User ID
    );
    return true;
  } catch (error) {
    throw new Error("Failed to send email");
  }
};

const sendEmail = async ({ to, subject, html }) => {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.EMAIL_USER;

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sender: { name: 'Portfolio Contact', email: senderEmail },
      to: [{ email: to }],
      subject: subject,
      htmlContent: html,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('❌ Brevo Email Error:', data);
    throw new Error(data.message || 'Email sending failed');
  }

  console.log('✅ Email sent successfully via Brevo');
  return data;
};

export { sendEmail };

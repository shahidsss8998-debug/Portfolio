import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendEmail } from './mailer.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173'
}));

// ─── Reply Templates ────────────────────────────────────────────────
const replyTemplates = {
  freelance: {
    subject: '🚀 Freelance Availability — Shahid',
    body: "Yes! I'm currently open to freelance work. Share your project details — scope, timeline, and budget — and I'll get back to you within 24 hours with a clear plan."
  },
  pricing: {
    subject: '💰 Pricing & Custom Quote — Shahid',
    body: "Pricing depends on the scope and complexity of the project. Send me your detailed requirements and timeline, and I'll prepare a custom quote tailored to your needs."
  },
  collab: {
    subject: '🤝 Open to Collaboration — Shahid',
    body: "I'm always open to collaborations! Tell me about your idea — what problem it solves, the tech stack you're considering, and your timeline — and let's see if it's a good fit."
  },
  tools: {
    subject: '🛠️ My Tech Stack & Workflow — Shahid',
    body: "I mainly use React, Node.js, Express, and Figma for design. I also work with MongoDB, PostgreSQL, and various deployment tools. Happy to share more details about my workflow!"
  },
  thankyou: {
    subject: '🙏 Thank You! — Shahid',
    body: "Thank you so much for reaching out! I really appreciate your kind words and the time you took to write. It means a lot — looking forward to staying connected."
  }
};

// ─── Email Template Helpers ─────────────────────────────────────────

function buildNotificationEmail({ name, email, message }) {
  const encodedEmail = encodeURIComponent(email);
  const encodedName = encodeURIComponent(name);

  const actionButtons = [
    { label: '🙏 Thank You for Your Response', type: 'thankyou', color: '#7c3aed' },
  ];

  const buttonsHtml = actionButtons.map(btn => `
    <a href="${BASE_URL}/api/reply/${btn.type}?to=${encodedEmail}&name=${encodedName}"
       class="action-btn"
       style="display:inline-block;padding:16px 44px;background-color:#c4956a;color:#0d0d0d;text-decoration:none;border-radius:6px;font-size:14px;font-weight:700;font-family:Georgia,'Times New Roman',serif;margin:6px;text-align:center;letter-spacing:0.5px;"
       target="_blank">${btn.label}</a>
  `).join('');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @media only screen and (max-width: 480px) {
      .email-wrapper { padding: 12px !important; }
      .email-container { width: 100% !important; }
      .header-section { padding: 36px 20px 24px 20px !important; }
      .header-title { font-size: 26px !important; }
      .divider-wrap { padding: 0 20px !important; }
      .sender-section { padding: 24px 20px !important; }
      .sender-card { display: block !important; width: 100% !important; margin-bottom: 12px !important; }
      .sender-spacer { display: none !important; }
      .message-section { padding: 0 20px 28px 20px !important; }
      .message-box { padding: 18px 20px !important; }
      .action-section { padding: 28px 20px !important; }
      .action-btn { padding: 16px 20px !important; width: 100% !important; box-sizing: border-box !important; }
      .footer-section { padding: 20px 20px 28px 20px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;font-family:Georgia,'Times New Roman',serif;background-color:#0d0d0d;-webkit-font-smoothing:antialiased;">
  <div class="email-wrapper" style="padding:0;">
  <div class="email-container" style="max-width:600px;margin:0 auto;background-color:#0d0d0d;">

    <!-- Header -->
    <div class="header-section" style="padding:50px 40px 30px 40px;text-align:center;">
      <p style="margin:0 0 8px 0;color:#c4956a;font-size:12px;text-transform:uppercase;letter-spacing:3px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Portfolio</p>
      <h1 class="header-title" style="color:#ffffff;margin:0;font-size:32px;font-weight:400;letter-spacing:-0.5px;line-height:1.3;">New Message<br>Received.</h1>
    </div>

    <!-- Divider -->
    <div class="divider-wrap" style="padding:0 40px;"><div style="height:1px;background-color:#2a2a2a;"></div></div>

    <!-- Sender Info -->
    <div class="sender-section" style="padding:32px 40px;">
      <!--[if mso]>
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td width="48%" valign="top">
      <![endif]-->
      <div class="sender-card" style="display:inline-block;width:47%;vertical-align:top;padding:20px 24px;background-color:#161616;border-radius:8px;box-sizing:border-box;">
        <p style="margin:0 0 6px 0;color:#666666;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-weight:600;">From</p>
        <p style="margin:0;color:#ffffff;font-size:16px;font-weight:400;word-break:break-word;">${name}</p>
      </div>
      <!--[if mso]>
      </td><td width="4%">&nbsp;</td><td width="48%" valign="top">
      <![endif]-->
      <span class="sender-spacer" style="display:inline-block;width:4%;"></span>
      <div class="sender-card" style="display:inline-block;width:47%;vertical-align:top;padding:20px 24px;background-color:#161616;border-radius:8px;box-sizing:border-box;">
        <p style="margin:0 0 6px 0;color:#666666;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-weight:600;">Email</p>
        <a href="mailto:${email}" style="color:#c4956a;font-size:14px;font-weight:400;text-decoration:none;word-break:break-all;">${email}</a>
      </div>
      <!--[if mso]>
      </td></tr></table>
      <![endif]-->
    </div>

    <!-- Message -->
    <div class="message-section" style="padding:0 40px 36px 40px;">
      <p style="margin:0 0 12px 0;color:#666666;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-weight:600;">Message</p>
      <div class="message-box" style="background-color:#161616;border-left:3px solid #c4956a;padding:24px 28px;border-radius:0 8px 8px 0;">
        <p style="margin:0;color:#d4d4d4;font-size:15px;line-height:1.8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;white-space:pre-wrap;word-break:break-word;">${message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>

    <!-- Divider -->
    <div class="divider-wrap" style="padding:0 40px;"><div style="height:1px;background-color:#2a2a2a;"></div></div>

    <!-- Action -->
    <div class="action-section" style="padding:36px 40px;text-align:center;">
      ${buttonsHtml}
    </div>

    <!-- Footer -->
    <div class="footer-section" style="padding:24px 40px 40px 40px;text-align:center;">
      <div style="height:1px;background-color:#2a2a2a;margin-bottom:24px;"></div>
      <p style="margin:0;color:#555555;font-size:12px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
        Received via Portfolio · ${new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
      </p>
    </div>

  </div>
  </div>
</body>
</html>`;
}

function buildReplyEmail({ name, type, body }) {
  const ownerEmail = process.env.EMAIL_USER;
  const encodedOwnerEmail = encodeURIComponent(ownerEmail);

  const quickReplyButtons = [
    { label: '🚀 Open to Freelance', subject: 'Freelance Inquiry', body: `Hi Shahid,\n\nI'm interested in hiring you for a freelance project. Here are the details:\n\n- Project: [Describe your project]\n- Timeline: [Expected timeline]\n- Budget: [Your budget range]\n\nLooking forward to hearing from you!\n\nBest regards,\n${name}`, color: '#7c3aed' },
    { label: '💰 Send Pricing', subject: 'Pricing Request', body: `Hi Shahid,\n\nI'd like to know your pricing for the following:\n\n- Service needed: [Describe the service]\n- Scope: [Project scope details]\n- Timeline: [Desired timeline]\n\nPlease share a custom quote.\n\nThanks,\n${name}`, color: '#2563eb' },
    { label: '🤝 Open to Collab', subject: 'Collaboration Opportunity', body: `Hi Shahid,\n\nI'd love to collaborate with you on a project!\n\n- Idea: [Describe your idea]\n- Tech Stack: [Technologies involved]\n- Timeline: [Expected timeline]\n\nLet's discuss further!\n\nCheers,\n${name}`, color: '#059669' },
    { label: '🛠️ Share My Tools', subject: 'Tools & Tech Stack Discussion', body: `Hi Shahid,\n\nI'd love to learn more about the tools and technologies you use.\n\nAlso, here are some tools I've been using:\n\n- [Tool 1]\n- [Tool 2]\n- [Tool 3]\n\nWould love to exchange ideas!\n\nBest,\n${name}`, color: '#d97706' },
  ];

  const quickReplyHtml = quickReplyButtons.map(btn => `
    <a href="mailto:${ownerEmail}?subject=${encodeURIComponent(btn.subject)}&body=${encodeURIComponent(btn.body)}"
       style="display:inline-block;padding:14px 28px;background-color:#c4956a;color:#0d0d0d;text-decoration:none;border-radius:6px;font-size:13px;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;margin:6px;text-align:center;min-width:150px;letter-spacing:0.3px;"
       target="_blank">${btn.label}</a>
  `).join('');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;font-family:Georgia,'Times New Roman',serif;background-color:#0d0d0d;-webkit-font-smoothing:antialiased;">
  <div style="max-width:600px;margin:0 auto;background-color:#0d0d0d;">

    <!-- Header -->
    <div style="padding:50px 40px 30px 40px;text-align:center;">
      <p style="margin:0 0 8px 0;color:#c4956a;font-size:12px;text-transform:uppercase;letter-spacing:3px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Shahid</p>
      <h1 style="color:#ffffff;margin:0;font-size:30px;font-weight:400;letter-spacing:-0.5px;line-height:1.3;">Hey ${name}!</h1>
      <p style="color:#777777;margin:12px 0 0 0;font-size:14px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-weight:400;">A personal reply from Shahid</p>
    </div>

    <!-- Divider -->
    <div style="padding:0 40px;"><div style="height:1px;background-color:#2a2a2a;"></div></div>

    <!-- Message -->
    <div style="padding:36px 40px;">
      <div style="background-color:#161616;border-radius:8px;padding:28px 32px;">
        <p style="margin:0;color:#d4d4d4;font-size:15px;line-height:1.85;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">${body}</p>
      </div>
    </div>

    <!-- Divider -->
    <div style="padding:0 40px;"><div style="height:1px;background-color:#2a2a2a;"></div></div>

    <!-- Quick Reply Buttons -->
    <div style="padding:36px 40px;text-align:center;">
      <p style="margin:0 0 20px 0;color:#666666;font-size:10px;text-transform:uppercase;letter-spacing:2px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-weight:600;">Quick Reply</p>
      ${quickReplyHtml}
    </div>

    <!-- Divider -->
    <div style="padding:0 40px;"><div style="height:1px;background-color:#2a2a2a;"></div></div>

    <!-- Custom Message -->
    <div style="padding:36px 40px;">
      <div style="background-color:#161616;border-radius:8px;padding:28px 32px;text-align:center;">
        <p style="margin:0 0 8px 0;color:#ffffff;font-size:15px;font-weight:400;">Write a Custom Reply</p>
        <p style="margin:0 0 24px 0;color:#777777;font-size:13px;line-height:1.6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          Open your email client with a pre-filled message.
        </p>
        <a href="mailto:${ownerEmail}?subject=${encodeURIComponent('Re: Portfolio Contact')}&body=${encodeURIComponent('Hi Shahid,\n\n[Write your message here]\n\nBest regards,\n' + name)}"
           style="display:inline-block;padding:14px 40px;background-color:#c4956a;color:#0d0d0d;text-decoration:none;border-radius:6px;font-size:14px;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;letter-spacing:0.3px;"
           target="_blank">📧 Open in Email Client</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding:24px 40px 40px 40px;text-align:center;">
      <div style="height:1px;background-color:#2a2a2a;margin-bottom:24px;"></div>
      <p style="margin:0 0 6px 0;color:#555555;font-size:12px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Shahid — Frontend Developer</p>
      <p style="margin:0;color:#444444;font-size:11px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">Feel free to reach out anytime!</p>
    </div>

  </div>
</body>
</html>`;
}

function buildSuccessPage(name) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reply Sent</title>
</head>
<body style="margin:0;padding:0;font-family:Georgia,'Times New Roman',serif;background-color:#0d0d0d;display:flex;align-items:center;justify-content:center;min-height:100vh;-webkit-font-smoothing:antialiased;">
  <div style="text-align:center;padding:60px 48px;background-color:#161616;border-radius:12px;max-width:420px;margin:20px;">
    <div style="width:64px;height:64px;background-color:#c4956a;border-radius:50%;margin:0 auto 28px auto;line-height:64px;font-size:32px;color:#0d0d0d;">✓</div>
    <h1 style="color:#ffffff;font-size:24px;margin:0 0 14px 0;font-weight:400;letter-spacing:-0.3px;">Reply Sent.</h1>
    <p style="color:#777777;font-size:15px;margin:0 0 32px 0;line-height:1.7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      Your reply has been sent to <strong style="color:#c4956a;">${name}</strong>.<br>They’ll receive it shortly.
    </p>
    <p style="color:#444444;font-size:13px;margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">You can close this tab now.</p>
  </div>
</body>
</html>`;
}

// ─── Routes ─────────────────────────────────────────────────────────

// POST /api/contact — Receive contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    const html = buildNotificationEmail({ name, email, message });

    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `📩 New Portfolio Message from ${name}`,
      html
    });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('❌ Contact Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
});

// GET /api/reply/:type — Send pre-written reply to visitor
app.get('/api/reply/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const { to, name } = req.query;

    if (!to || !name) {
      return res.status(400).send('<h1>Missing required parameters: to, name</h1>');
    }

    const template = replyTemplates[type];

    if (!template) {
      return res.status(404).send(`<h1>Template "${type}" not found</h1>`);
    }

    const decodedName = decodeURIComponent(name);

    const html = buildReplyEmail({
      name: decodedName,
      type,
      body: template.body
    });

    await sendEmail({
      to: decodeURIComponent(to),
      subject: template.subject,
      html
    });

    res.status(200).send(buildSuccessPage(decodedName));

  } catch (error) {
    console.error('❌ Reply Error:', error);
    res.status(500).send(`
      <div style="font-family:sans-serif;text-align:center;padding:40px;">
        <h1 style="color:#ef4444;">Failed to send reply</h1>
        <p style="color:#64748b;">${error.message}</p>
      </div>
    `);
  }
});

// GET /api/test-email — Test email delivery
app.get('/api/test-email', async (req, res) => {
  try {
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: '✅ Email Test — Portfolio',
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:40px;text-align:center;background-color:#0f172a;">
          <div style="max-width:480px;margin:0 auto;background-color:#1e293b;padding:40px;border-radius:16px;border:1px solid #334155;">
            <div style="font-size:48px;margin-bottom:16px;">✅</div>
            <h1 style="color:#22c55e;font-size:22px;margin:0 0 8px 0;">Email is Working!</h1>
            <p style="color:#94a3b8;font-size:15px;margin:0;">Brevo HTTP API test passed successfully.</p>
            <p style="color:#64748b;font-size:13px;margin:16px 0 0 0;">Sent at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    });
    res.json({ success: true, message: 'Test email sent successfully' });
  } catch (error) {
    console.error('Test email failed:', error);
    res.status(500).json({ success: false, message: 'Failed to send test email', error: error.message });
  }
});

// GET /api/health — Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

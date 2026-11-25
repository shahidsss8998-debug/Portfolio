import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendEmail } from './mailer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;
let BASE_URL = process.env.BASE_URL || process.env.RENDER_EXTERNAL_URL || 'https://portfolio-backend-917v.onrender.com';
let CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173,http://localhost:5174';

// Normalize URLs by trimming trailing slashes
if (BASE_URL.endsWith('/')) BASE_URL = BASE_URL.slice(0, -1);

// Split allowed origins by comma, trim whitespace, and remove trailing slashes
const allowedOrigins = CORS_ORIGIN.split(',')
  .map(origin => origin.trim().replace(/\/$/, ''));

app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
      return callback(null, true);
    } else {
      console.log(`CORS Blocked for origin: ${origin}. Allowed origins:`, allowedOrigins);
      return callback(new Error('Not allowed by CORS'));
    }
  }
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
    subject: '🙏 Thank You for Reaching Out! — Muhammed Shahid P',
    body: "Thank you so much for reaching out! I really appreciate your kind words and the time you took to write. It means a lot — looking forward to staying connected."
  }
};

// ─── Email Template Helpers ─────────────────────────────────────────

function buildNotificationEmail({ name, email, message }) {
  const encodedEmail = encodeURIComponent(email);
  const encodedName = encodeURIComponent(name);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message — Muhammed Shahid P</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050814; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #050814; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container with Glow and Rounded Corners -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; background-color: #080d22; border: 1px solid #1e293b; border-radius: 20px; overflow: hidden; box-shadow: 0 24px 60px rgba(0, 0, 0, 0.75), 0 0 40px rgba(139, 92, 246, 0.1);">
          
          <!-- Top Multi-Color Glowing Gradient Bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%);"></td>
          </tr>

          <!-- Header Section with Monogram and Status -->
          <tr>
            <td style="padding: 32px 32px 20px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <!-- Monospace Badge -->
                    <div style="margin-bottom: 12px;">
                      <span style="display: inline-block; padding: 4px 10px; font-size: 10px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #22d3ee; background-color: rgba(6, 182, 212, 0.12); border: 1px solid rgba(6, 182, 212, 0.32); border-radius: 6px;">
                        ● PORTFOLIO TRANSMISSION
                      </span>
                    </div>
                    <h1 style="margin: 0 0 6px 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px; line-height: 1.3;">
                      New Message from <span style="color: #a78bfa;">${name}</span>
                    </h1>
                    <p style="margin: 0; font-size: 12px; color: #94a3b8; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;">
                      Source: <span style="color: #38bdf8;">shahid-pf.netlify.app</span>
                    </p>
                  </td>
                  <td align="right" valign="top" style="width: 54px;">
                    <!-- Monogram Tech Badge -->
                    <div style="width: 48px; height: 48px; border-radius: 14px; background: linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(6, 182, 212, 0.2)); border: 1px solid rgba(139, 92, 246, 0.45); text-align: center; line-height: 48px; font-family: ui-monospace, monospace; font-weight: 700; font-size: 16px; color: #c084fc; box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);">
                      &lt;/&gt;
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender Details Grid -->
          <tr>
            <td style="padding: 0 32px 18px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0c1333; border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width: 80px;">
                          <span style="font-size: 10px; font-family: ui-monospace, monospace; font-weight: 600; text-transform: uppercase; letter-spacing: 1.2px; color: #64748b;">SENDER</span>
                        </td>
                        <td>
                          <span style="font-size: 14px; font-weight: 600; color: #f1f5f9;">${name}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width: 80px;">
                          <span style="font-size: 10px; font-family: ui-monospace, monospace; font-weight: 600; text-transform: uppercase; letter-spacing: 1.2px; color: #64748b;">EMAIL</span>
                        </td>
                        <td>
                          <a href="mailto:${email}" style="font-size: 14px; font-weight: 500; color: #38bdf8; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body Container -->
          <tr>
            <td style="padding: 0 32px 24px 32px;">
              <div style="margin-bottom: 8px;">
                <span style="font-size: 10px; font-family: ui-monospace, monospace; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #a78bfa;">
                  // MESSAGE_PAYLOAD
                </span>
              </div>
              <div style="background-color: #0a1029; border: 1px solid rgba(139, 92, 246, 0.28); border-left: 4px solid #8b5cf6; border-radius: 0 12px 12px 0; padding: 18px 20px;">
                <p style="margin: 0; font-size: 14px; line-height: 1.75; color: #e2e8f0; white-space: pre-wrap; word-break: break-word;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </td>
          </tr>

          <!-- Actions Bar -->
          <tr>
            <td style="padding: 0 32px 28px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <!-- Compulsory Primary Action Button: Thank You for Your Response -->
                <tr>
                  <td align="center" style="padding-bottom: 16px;">
                    <a href="${BASE_URL}/api/reply/thankyou?to=${encodedEmail}&name=${encodedName}"
                       style="display: inline-block; padding: 14px 34px; background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; border-radius: 9999px; font-size: 14px; font-weight: 700; letter-spacing: 0.3px; text-align: center; box-shadow: 0 6px 24px rgba(139, 92, 246, 0.5); border: 1px solid rgba(255, 255, 255, 0.25);"
                       target="_blank">🙏 Thank You for Your Response</a>
                  </td>
                </tr>
                <!-- Secondary Quick Response Shortcuts -->
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding: 0 4px;">
                          <a href="mailto:${email}?subject=${encodeURIComponent('Re: Portfolio Inquiry from ' + name)}&body=${encodeURIComponent('Hi ' + name + ',\n\nThank you for reaching out through my developer portfolio!\n\nBest regards,\nMuhammed Shahid P')}"
                             style="display: inline-block; padding: 7px 13px; background-color: #0c1333; border: 1px solid rgba(139, 92, 246, 0.3); color: #c084fc; text-decoration: none; border-radius: 8px; font-size: 11px; font-weight: 600; font-family: ui-monospace, monospace;"
                             target="_blank">✉️ Direct Reply</a>
                        </td>
                        <td style="padding: 0 4px;">
                          <a href="${BASE_URL}/api/reply/freelance?to=${encodedEmail}&name=${encodedName}"
                             style="display: inline-block; padding: 7px 13px; background-color: #0c1333; border: 1px solid rgba(59, 130, 246, 0.3); color: #60a5fa; text-decoration: none; border-radius: 8px; font-size: 11px; font-weight: 600; font-family: ui-monospace, monospace;"
                             target="_blank">🚀 Freelance Availability</a>
                        </td>
                        <td style="padding: 0 4px;">
                          <a href="${BASE_URL}/api/reply/pricing?to=${encodedEmail}&name=${encodedName}"
                             style="display: inline-block; padding: 7px 13px; background-color: #0c1333; border: 1px solid rgba(6, 182, 212, 0.3); color: #22d3ee; text-decoration: none; border-radius: 8px; font-size: 11px; font-weight: 600; font-family: ui-monospace, monospace;"
                             target="_blank">💰 Quote Info</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer Bar -->
          <tr>
            <td style="padding: 18px 32px; border-top: 1px solid rgba(255, 255, 255, 0.06); background-color: #060919; text-align: center;">
              <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #e2e8f0; letter-spacing: 0.3px;">
                MUHAMMED SHAHID P <span style="color: #64748b;">·</span> PORTFOLIO SYSTEM
              </p>
              <p style="margin: 0; font-size: 11px; color: #64748b; font-family: ui-monospace, monospace;">
                Kozhikode, Kerala, India · <a href="https://shahid-pf.netlify.app" style="color: #06b6d4; text-decoration: none;">shahid-pf.netlify.app</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildReplyEmail({ name, body }) {
  const ownerEmail = process.env.EMAIL_USER;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Response from Muhammed Shahid P</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050814; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #050814; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container with Glow and Rounded Corners -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; background-color: #080d22; border: 1px solid #1e293b; border-radius: 20px; overflow: hidden; box-shadow: 0 24px 60px rgba(0, 0, 0, 0.75), 0 0 40px rgba(139, 92, 246, 0.1);">
          
          <!-- Top Multi-Color Glowing Gradient Bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%);"></td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="padding: 32px 32px 20px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <!-- Verified Developer Badge -->
                    <div style="margin-bottom: 12px;">
                      <span style="display: inline-block; padding: 4px 10px; font-size: 10px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #a78bfa; background-color: rgba(139, 92, 246, 0.12); border: 1px solid rgba(139, 92, 246, 0.32); border-radius: 6px;">
                        ● MUHAMMED SHAHID P
                      </span>
                    </div>
                    <h1 style="margin: 0 0 6px 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px; line-height: 1.25;">
                      Hello <span style="color: #38bdf8;">${name}</span>!
                    </h1>
                    <p style="margin: 0; font-size: 13px; color: #94a3b8; line-height: 1.5;">
                      Thank you for reaching out through my developer portfolio.
                    </p>
                  </td>
                  <td align="right" valign="top" style="width: 54px;">
                    <div style="width: 48px; height: 48px; border-radius: 14px; background: linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(59, 130, 246, 0.2)); border: 1px solid rgba(139, 92, 246, 0.45); text-align: center; line-height: 48px; font-family: ui-monospace, monospace; font-weight: 700; font-size: 16px; color: #c084fc; box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);">
                      SP
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body Card -->
          <tr>
            <td style="padding: 0 32px 24px 32px;">
              <div style="background-color: #0a1029; border: 1px solid rgba(139, 92, 246, 0.28); border-left: 4px solid #06b6d4; border-radius: 0 12px 12px 0; padding: 20px 22px;">
                <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.8; color: #f1f5f9; white-space: pre-wrap; word-break: break-word;">${body}</p>
                <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 14px;">
                  <p style="margin: 0 0 2px 0; font-size: 13px; font-weight: 600; color: #ffffff;">Muhammed Shahid P</p>
                  <p style="margin: 0; font-size: 11px; color: #94a3b8; font-family: ui-monospace, monospace;">Frontend & Full-Stack Developer · Kerala, India</p>
                </div>
              </div>
            </td>
          </tr>

          <!-- Action Buttons Bar -->
          <tr>
            <td style="padding: 0 32px 24px 32px;" align="center">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding: 0 6px;">
                    <a href="mailto:${ownerEmail}?subject=${encodeURIComponent('Re: Portfolio Discussion')}&body=${encodeURIComponent('Hi Shahid,\n\n')}"
                       style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; border-radius: 9999px; font-size: 13px; font-weight: 700; letter-spacing: 0.2px; text-align: center; box-shadow: 0 6px 20px rgba(139, 92, 246, 0.45); border: 1px solid rgba(255, 255, 255, 0.2);"
                       target="_blank">Reply to this Email</a>
                  </td>
                  <td style="padding: 0 6px;">
                    <a href="https://shahid-pf.netlify.app"
                       style="display: inline-block; padding: 11px 22px; background-color: #0c1333; border: 1px solid rgba(139, 92, 246, 0.35); color: #e2e8f0; text-decoration: none; border-radius: 9999px; font-size: 13px; font-weight: 600; text-align: center;"
                       target="_blank">View Live Portfolio ↗</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Social Links Strip -->
          <tr>
            <td style="padding: 0 32px 22px 32px;" align="center">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="https://github.com/shahidsss8998-debug" style="color: #94a3b8; text-decoration: none; font-size: 11px; font-family: ui-monospace, monospace;" target="_blank">GitHub</a>
                  </td>
                  <td style="color: #475569;">·</td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.linkedin.com/in/shahyid/" style="color: #38bdf8; text-decoration: none; font-size: 11px; font-family: ui-monospace, monospace;" target="_blank">LinkedIn</a>
                  </td>
                  <td style="color: #475569;">·</td>
                  <td style="padding: 0 8px;">
                    <a href="https://wa.me/+917592037434" style="color: #4ade80; text-decoration: none; font-size: 11px; font-family: ui-monospace, monospace;" target="_blank">WhatsApp</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer Bar -->
          <tr>
            <td style="padding: 18px 32px; border-top: 1px solid rgba(255, 255, 255, 0.06); background-color: #060919; text-align: center;">
              <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #e2e8f0;">
                Muhammed Shahid P
              </p>
              <p style="margin: 0; font-size: 11px; color: #64748b; font-family: ui-monospace, monospace;">
                React · Tailwind CSS · Three.js · Node.js · <a href="https://shahid-pf.netlify.app" style="color: #06b6d4; text-decoration: none;">shahid-pf.netlify.app</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildSuccessPage(name) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reply Sent — Muhammed Shahid P</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050814; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, Arial, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; -webkit-font-smoothing: antialiased; color: #f8fafc;">
  <div style="text-align: center; padding: 48px 36px; background-color: #080d22; border: 1px solid #1e293b; border-radius: 20px; max-width: 440px; margin: 20px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(139, 92, 246, 0.15); position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%);"></div>
    <div style="width: 56px; height: 56px; background: rgba(139, 92, 246, 0.15); border: 1px solid rgba(139, 92, 246, 0.4); border-radius: 50%; margin: 0 auto 20px auto; line-height: 56px; font-size: 24px; color: #22d3ee; box-shadow: 0 0 25px rgba(6, 182, 212, 0.25);">✓</div>
    <span style="display: inline-block; padding: 4px 10px; font-size: 10px; font-family: ui-monospace, monospace; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: #22d3ee; background-color: rgba(6, 182, 212, 0.12); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 6px; margin-bottom: 12px;">
      TRANSMISSION DELIVERED
    </span>
    <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0 0 10px 0; letter-spacing: -0.3px;">Reply Dispatched</h1>
    <p style="color: #94a3b8; font-size: 14px; margin: 0 0 24px 0; line-height: 1.6;">
      Your automated reply has been sent to <strong style="color: #a78bfa;">${name}</strong>.<br>The email was delivered to their inbox.
    </p>
    <a href="https://shahid-pf.netlify.app" style="display: inline-block; padding: 11px 26px; background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; border-radius: 9999px; font-size: 13px; font-weight: 600; letter-spacing: 0.3px; box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);">Back to Portfolio</a>
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

    // Await the email operation so the client receives an accurate success or failure response
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `⚡ [Portfolio Inquiry] New message from ${name}`,
      html,
      senderName: 'Portfolio Inquiry'
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
      html,
      senderName: 'Muhammed Shahid P'
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

// GET /api/test-email — Test email delivery with stylized template
app.get('/api/test-email', async (req, res) => {
  try {
    const previewHtml = buildNotificationEmail({
      name: 'Design Preview (Test)',
      email: 'visitor@example.com',
      message: 'This is a live preview of your newly stylized developer portfolio email message. It features the deep navy background (#050814), glowing gradient accent bar (#8b5cf6 -> #3b82f6 -> #06b6d4), terminal message block, and one-click quick actions!'
    });

    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: '⚡ [Design Preview] Stylized Developer Portfolio Email',
      html: previewHtml,
      senderName: 'Portfolio System'
    });
    res.json({ success: true, message: 'Test email sent successfully with updated template' });
  } catch (error) {
    console.error('Test email failed:', error);
    res.status(500).json({ success: false, message: 'Failed to send test email', error: error.message });
  }
});

// GET /api/health — Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', uptime: process.uptime() });
});

export { buildNotificationEmail, buildReplyEmail, buildSuccessPage };

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

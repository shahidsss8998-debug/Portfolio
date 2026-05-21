# 🚀 Portfolio Deployment Guide

This guide explains how to host your fullstack portfolio website. The application is split into two parts:
1. **Frontend**: Vite + React + Tailwind CSS
2. **Backend**: Express + Brevo Mailer API

For a portfolio, the most reliable and **100% free** setup is to deploy the:
- **Frontend** to **Vercel** or **Netlify** (super fast global CDN, continuous deployment).
- **Backend** to **Render** or **Railway** (free tier Node.js hosting).

---

## Step 1: Push Your Code to GitHub

First, you need to commit all your local changes (including the backend server and frontend configuration fixes) and push them to GitHub.

1. Open your terminal in the project root directory.
2. Stage and commit the changes:
   ```bash
   # Add the server files and frontend modifications
   git add .
   
   # Commit the changes
   git commit -m "feat: configure api URL and add dark theme backend mailer"
   
   # Push to GitHub
   git push origin main
   ```

*Note: The `server/.gitignore` file we created ensures your sensitive `.env` file containing the Brevo API key is **not** pushed to GitHub.*

---

## Step 2: Deploy the Backend on Render

[Render](https://render.com) is a great free hosting provider for Node.js backends.

1. **Sign Up / Log In**: Go to [Render](https://render.com) and log in with your GitHub account.
2. **Create Web Service**: Click **New +** at the top right, select **Web Service**, and choose **Build and deploy from a Git repository**.
3. **Connect Repository**: Choose your `Portfolio` repository.
4. **Configure Settings**:
   - **Name**: `portfolio-backend` (or any name you prefer)
   - **Region**: Select the region closest to you or your target audience (e.g., `Singapore` or `Oregon`).
   - **Branch**: `main`
   - **Root Directory**: `server` 👈 *Important: This tells Render to run commands inside the server folder.*
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: Select **Free**.
5. **Add Environment Variables**:
   Scroll down and click **Advanced** -> **Add Environment Variable**. Add the following keys and values:
   
   | Key | Value | Description |
   | :--- | :--- | :--- |
   | `PORT` | `10000` (Render sets this automatically, but you can override it) | Port backend runs on |
   | `BREVO_API_KEY` | `xkeysib-2a431a3b80b67...` | Your Brevo API key |
   | `EMAIL_USER` | `shahidsss8998@gmail.com` | Your Gmail address |
   | `BASE_URL` | *Your Deployed Render URL* (e.g. `https://portfolio-backend.onrender.com`) | Used for reply links in emails |
   | `CORS_ORIGIN` | *Your Deployed Frontend URL* (e.g. `https://shahid-portfolio.vercel.app`) | Allowed frontend origin |

   *Note: For the first deploy, you might not know your frontend URL yet. You can deploy the backend first, deploy the frontend, and then come back to Render's **Environment** tab to update `CORS_ORIGIN` with your actual frontend URL.*

6. Click **Create Web Service** at the bottom of the page. Render will build and start your server!

---

## Step 3: Deploy the Frontend on Netlify

[Netlify](https://www.netlify.com) is an excellent platform for deploying static Vite/React applications.

1. **Sign Up / Log In**: Go to [Netlify](https://www.netlify.com) and log in with your GitHub account.
2. **Import from GitHub**: Click the **Add new site** button on your dashboard and select **Import an existing project**.
3. **Connect Git Provider**: Select **GitHub** and authorize Netlify. Choose your `Portfolio` repository from the list.
4. **Configure Build Settings**:
   - **Branch to deploy**: `main`
   - **Base directory**: Leave blank (root directory `./`)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. **Add Environment Variables**:
   - Expand the **Environment variables** section (or click **Add environment variable**).
   - Click **New variable** and add:
     * **Key**: `VITE_API_URL`
     * **Value**: *Your Deployed Render URL* (e.g., `https://portfolio-backend.onrender.com`)
6. **Deploy**: Click **Deploy [site-name]**. Netlify will build your project and give you a live URL in about a minute.

---

## Alternative Step 3: Deploy the Frontend on Vercel

If you prefer Vercel:
1. Go to [Vercel](https://vercel.com) and sign up with GitHub.
2. Click **Add New** -> **Project** and **Import** your repository.
3. Keep the default settings (Root: `./`, Build: `npm run build`, Output: `dist`).
4. Under **Environment Variables**, add `VITE_API_URL` with your Render backend URL.
5. Click **Deploy**.

---

## Step 4: Link CORS Origin (Final Polish)

Once both your frontend (Netlify/Vercel) and backend (Render) are live:
1. Copy your frontend URL from Netlify (e.g., `https://your-site-name.netlify.app`).
2. Go to your backend dashboard on **Render**.
3. Under the **Environment** tab, find `CORS_ORIGIN`.
4. Update its value to your Netlify URL (make sure it matches exactly, e.g., `https://your-site-name.netlify.app` with no trailing slash).
5. Save changes. Render will automatically redeploy the backend with the updated CORS policy.

🎉 **All done! Your portfolio is now online and fully functional!**


# Harshit Gupta Portfolio

A modern, minimalistic portfolio for graphic designer Harshit Gupta.

## Features

- Clean, modern, minimalistic design
- Dark/Light theme toggle
- Smooth animations with Framer Motion
- Responsive layout with Tailwind CSS
- Interactive portfolio grid
- Contact form

## Deployment to Vercel

To deploy this project to Vercel, follow these steps:

1.  **Push to GitHub/GitLab/Bitbucket:** Create a new repository and push your code.
2.  **Import to Vercel:**
    -   Go to [vercel.com](https://vercel.com) and sign in.
    -   Click **Add New** -> **Project**.
    -   Import your repository.
3.  **Configure Project:**
    -   Vercel should automatically detect **Vite** as the framework.
    -   **Build Command:** `npm run build`
    -   **Output Directory:** `dist`
4.  **Environment Variables:**
    -   If you're using any API keys (like `GEMINI_API_KEY`), add them in the **Environment Variables** section of the project settings on Vercel.
5.  **Deploy:** Click **Deploy**.

## Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Build for production:
    ```bash
    npm run build
    ```

# Devsphere — Personal Portfolio & Project Showcase

> Personal portfolio and demo hub showcasing web, mobile, IoT and AI projects built by Dheeraj Vishwakarma. Includes a Next.js frontend, example project pages, and small utility/demo projects (Streamlit apps, IoT controllers, ML demos).

## Highlights

- Clean Next.js 13 + TypeScript portfolio layout with animated sections (Framer Motion).
- Featured projects: smartBreeze (IoT), AI Code Reviewer, MovieDB recommender, StegoScan, ipynb-to-pdf, StackQuest and more.
- Built-in AI chat endpoint demonstrating usage of the `ai` package (OpenAI models).
- Small demo apps (Streamlit) live-hosted for quick demoing.

## Tech stack

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- Streamlit (for some demo apps)
- ai package (OpenAI integration)

## Quick demo

Live demos (if available) are linked in each project's entry in the `Projects` section of the site.

## Getting started (local)

1. Clone the repo:

```powershell
git clone https://github.com/Dheerajvishwakarma2004/devsphere-personal-portfolio.git
cd devsphere-personal-portfolio
```

2. Install dependencies:

```powershell
npm install
```

3. Create environment variable file `.env.local` in the project root and add your OpenAI key (used by the AI/chat API). Example:

```
OPENAI_API_KEY=sk-...
```

4. Start the dev server:

```powershell
npm run dev
```

5. Open http://localhost:3000

Notes on Windows PowerShell temporary session variable (alternative):

```powershell
$env:OPENAI_API_KEY = "sk-..." ; npm run dev
```

## API key / provider

- This project uses the `ai` package (provider: OpenAI). Obtain an API key from https://platform.openai.com/account/api-keys and set it as `OPENAI_API_KEY` in your environment.
- For production (Vercel): add `OPENAI_API_KEY` under Project → Settings → Environment Variables and deploy.

## Project structure (high level)

- `app/` — Next.js App Router pages and API routes (`/api/chat` endpoint)
- `components/` — React components for the portfolio site (projects, skills, chatbot, etc.)
- `public/` — Static assets
- `styles/` — Global styles and Tailwind setup
- `README.md` — (this file)

## AI chat endpoint

- Endpoint: `POST /api/chat` expects JSON body { messages: [{ sender, text }] }.
- The endpoint uses the `ai` package and the `OPENAI_API_KEY` from env to generate replies. See `app/api/chat/route.ts` for implementation details.

Example request (client-side):

```js
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ messages: [{ sender: 'user', text: 'Hello' }] }),
})
  .then(r => r.json())
  .then(data => console.log(data))
```

## Deploying

- Recommended: Vercel. Connect the repo, set `OPENAI_API_KEY` in Environment Variables, and deploy. The site will be built using the Next.js 13 app router.

## Hackathon submission notes

Include the following for a clean submission:

1. This `README.md` (overview, tech, run steps)
2. Live demo URL(s) for hosted Streamlit apps & the site
3. Short video (2-3 minutes) or GIF showcasing core features:
   - Visit homepage and scroll through sections
   - Open a featured project (e.g., StegoScan or StackQuest)
   - Demonstrate the AI chat (type a prompt and show response)
4. Brief architecture diagram or bullet points (client, API route, external services)
5. Notes about how to run locally and environment variables

## Contribution

PRs are welcome. For bigger changes, open an issue first to discuss the design.

## License

This repository does not contain a license file. Add one (e.g., MIT) if you want to permit public reuse.

## Contact

Dheeraj Vishwakarma — link to contact form on the site or add your email.

---



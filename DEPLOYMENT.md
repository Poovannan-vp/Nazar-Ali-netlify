# Deployment Guide (for the developer — you)

This is a one-time setup. Follow these steps to deploy the site + give the professor admin access.

---

## 1. Push code to GitHub

```bash
cd nazar-ali-website
git init
git add .
git commit -m "Initial portfolio with CMS"
```

- Create a new repo on GitHub (e.g. `nazar-ali-portfolio`).
- Push:
```bash
git remote add origin https://github.com/YOUR-USERNAME/nazar-ali-portfolio.git
git branch -M main
git push -u origin main
```

## 2. Deploy to Netlify

1. Go to https://app.netlify.com → **"Add new site"** → **"Import from Git"**.
2. Choose GitHub → select your repo.
3. Build settings (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **"Deploy"**.

After ~1 minute, you'll get a URL like `https://random-name.netlify.app`. You can rename it in **Site settings → Change site name**.

## 3. Enable Identity (login for professor)

1. In Netlify dashboard → your site → **"Integrations"** tab (or "Identity" on older UI).
2. Enable **Netlify Identity**.
3. Under **Registration**, change to **"Invite only"** (so nobody else can sign up).
4. Under **Services → Git Gateway**, click **"Enable Git Gateway"**.

## 4. Update `config.yml` with your site URL

Open `public/admin/config.yml` and change:
```yaml
site_url: https://example.netlify.app
display_url: https://example.netlify.app
```
to your actual Netlify URL. Commit + push — Netlify will auto-redeploy.

## 5. Invite the Professor

1. Netlify dashboard → your site → **Identity** tab.
2. Click **"Invite users"**.
3. Enter professor's email: `naza.annai@gmail.com`
4. He gets an email → clicks link → sets password.
5. Send him `PROFESSOR_GUIDE.md` (the simple guide).

## 6. (Optional) Custom Domain

- Buy a domain (e.g. `drnazarali.in` from GoDaddy / Namecheap — ~₹800/yr).
- Netlify dashboard → **Domain settings** → **Add custom domain** → follow DNS instructions.
- Netlify gives free SSL automatically.

---

## How the system works

```
Professor logs in → /admin
        ↓
Edits a form (e.g. adds an award)
        ↓
Clicks "Publish" → Decap CMS commits JSON file to GitHub
        ↓
GitHub webhook → Netlify rebuilds site (~1 min)
        ↓
Live website updated 🎉
```

Everything is free:
- GitHub: free (public or private repo)
- Netlify: free tier (100 GB bandwidth/month)
- Netlify Identity: free (up to 1000 users)
- Decap CMS: free, open source

---

## Files overview

| File/Folder | Purpose |
|---|---|
| `src/content/*.json` | All editable content (the professor never sees these directly) |
| `public/admin/index.html` | The CMS login page |
| `public/admin/config.yml` | Defines the edit forms the professor sees |
| `public/uploads/` | Where uploaded images are saved |
| `netlify.toml` | Netlify build config |
| `PROFESSOR_GUIDE.md` | Simple instructions for the professor |
| `src/utils/iconMap.jsx` | Maps icon name strings → React icon components |

---

## Local testing (before deploy)

To test the admin locally without deploying:

```bash
# Terminal 1 — run the CMS proxy (allows local edits to save to filesystem)
npx decap-server

# Terminal 2 — run the site
npm run dev
```

Then open `http://localhost:5173/admin` — it will use your local files instead of GitHub.

**Important:** Before running locally, open `public/admin/config.yml` and uncomment the line:
```yaml
# local_backend: true
```
Re-comment it (or remove) before pushing to production.

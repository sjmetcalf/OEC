# OEC Practice

Unofficial Outdoor Emergency Care study tool. Drill by topic, take a short exam, and review the questions you missed. The questions are original practice items, not the National Ski Patrol test bank, and the app does not certify anyone.

The site is a React app on Cloudflare Workers, served at [oec.fyi](https://oec.fyi).

```bash
npm install
npm run dev
```

Pushes to `main` deploy automatically through GitHub Actions (`.github/workflows/deploy.yml`), using the `CLOUDFLARE_API_TOKEN` repository secret and the `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` repository variables. To deploy by hand, run `npm run deploy` after `cf auth login`. The Worker name is `oec`, and `cloudflare.config.ts` attaches the `oec.fyi` custom domain.

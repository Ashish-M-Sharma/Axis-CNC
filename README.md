# Axis CNC Technologies – React website

Stack: React 18 + Vite + React Router. Light/dark theme toggle, responsive, lazy-loaded routes.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in /dist
    npm run preview

## Deploy
- **Vercel / Netlify**: import the folder (config already included, SPA rewrites handled).
- **cPanel / any host**: run `npm run build`, upload the contents of `dist/` to public_html. For routes to work on Apache, add an .htaccess that rewrites all requests to index.html.

## Edit content
All text, services, machines, clients and contact details live in `src/data.js`. Images are in `public/img`.

# Agent Guide — CloudNest IDE

This document helps developers and AI agents quickly understand, navigate, and work with this repository. It explains the project layout, important entry points, run and development instructions, conventions, and recommended workflows for both humans and automated agents.

---

## Repository Overview

- Project name: CloudNest IDE (client + server).
- Purpose: Web client (Vite + React) and a Node.js server providing backend logic and example scripts.
- High-level layout:
  - `client/` — front-end app (Vite, React). Contains source, static assets, and build config.
  - `SERVER/` — back-end code, example scripts, and utilities.

---

## Where to Start (Quick)

- Open the front-end: `client/`.
  - Entry: `client/src/main.jsx` (React bootstrap).
  - Components: `client/src/components/` (e.g., `terminal.jsx`, `Tree.jsx`).
  - Dev commands: run `npm install` then `npm run dev` inside `client/` (check `client/package.json` scripts first).

- Open the back-end: `SERVER/`.
  - Common entry: `SERVER/index.js` (if present). There are example folders (`hello/`, `User/`, etc.).
  - Dev commands: run `npm install` then `node index.js` or `npm start` inside `SERVER/` (check `SERVER/package.json`).

---

## Detailed Structure & Key Files

- client/
  - `package.json` — scripts and dependencies for the front-end.
  - `vite.config.js` — Vite config.
  - `index.html` — HTML shell.
  - `src/main.jsx` — app entry; look here for providers, router, global state.
  - `src/socket.js` — socket client integration (if real-time features exist).
  - `src/components/terminal.jsx` — terminal UI component.
  - `src/components/Tree.jsx` — file-tree UI component.

- SERVER/
  - `index.js` — likely server entry point (verify existence and selected export).
  - `package.json` — server scripts and dependencies.
  - `User/`, `hello/`, `something/` — example code and utilities. Explore these for sample endpoints and usage.

Notes for agents: search for `listen(`, `app.use(`, `express`, `http.createServer`, or `ws` to find network entry points; search `export`/`module.exports` to find exposed APIs.

---

## How to Run (recommended steps)

1. Install dependencies for client and server separately:

```bash
cd client
npm install
cd ../SERVER
npm install
```

2. Start the server (example):

```bash
cd SERVER
# either
node index.js
# or (if a script exists)
npm start
```

3. Start the client (example):

```bash
cd client
npm run dev
```

4. If the client uses a separate port, open the URL printed by Vite (commonly `http://localhost:5173`).

Always check each `package.json` scripts for exact commands and ports.

---

## For AI Agents: Tasks & Entry Points

When performing automated analysis, transformation, or tests, focus on these targets:

- Static analysis & navigation:
  - `client/src` for UI components, state, and socket usage.
  - `SERVER/` for API endpoints and server-side logic.

- Adding features or AST transforms:
  - Modify React components under `client/src/components/`.
  - Add routes or handlers in `SERVER/index.js` or in folders under `SERVER/`.

- Testing & CI hooks:
  - Add unit tests close to the code being modified.
  - Use `package.json` scripts for lint/test commands.

- Runtime checks:
  - Search for `process.env` usage to discover env-based configuration.
  - Inspect `vite.config.js` and `SERVER/package.json` for proxies/CORS settings.

---

## Development Conventions & Tips

- File changes:
  - Keep UI logic in `client/src/components` and shared utilities in `client/src` root or `utils` folder if created.
  - Keep server endpoints small and modular in `SERVER/` subfolders.

- Ports & env:
  - Do not hardcode ports—prefer environment variables. If ports are hardcoded, add comments and document them in this file.

- Search strategy:
  - Use text search for `TODO`, `FIXME`, `// NOTE`, `listen(`, `fetch(`, `axios`, `socket` to find integration points quickly.

- Running and debugging:
  - Use the browser console and network tab for client-side debugging.
  - Use console logs or a debugger (e.g., `node --inspect`) for server-side debugging.

---

## Common Tasks & How-To Snippets

- Open a component to edit:

```bash
# from workspace root
code client/src/components/terminal.jsx
```

- Find server API definitions:

```bash
# search for express/fastify routes
rg "app\.get|app\.post|router\.get|router\.post|express(" SERVER -n
```

- Add a new route (example):

1. Create a file `SERVER/routes/newRoute.js` exporting a router.
2. Require and use it in `SERVER/index.js` with `app.use('/new', require('./routes/newRoute'))`.

---

## Troubleshooting

- If client doesn't load: ensure `client` dependencies were installed and run `npm run dev` in `client`.
- If server fails to start: run `node index.js` and inspect the error stack; missing modules mean `npm install` was not run in `SERVER/`.
- If ports conflict: find the port config in `client/package.json`, `vite.config.js`, or `SERVER/index.js`.

---

## Contribution Guidelines (suggested)

- Create small, focused commits.
- Open PRs with a short description of behavior changes and testing steps.
- Add or update this `Agent.md` with any structural changes.

---

## Useful commands reference

- Install dependencies:

```bash
npm install
```

- Run client (if using Vite):

```bash
cd client
npm run dev
```

- Run server:

```bash
cd SERVER
node index.js
# or
npm start
```

- Search code (ripgrep recommended):

```bash
rg "pattern" -n
```

---

## Final notes for agents

- Always re-scan `package.json` and `index.*` files before assuming commands or ports.
- Prefer safe, non-destructive changes for automated agents: open PRs rather than pushing directly.
- Update this `Agent.md` with any discovered conventions or new commands.

---

If you'd like, I can also:
- add a `README.md` summary in `client/` or `SERVER/`,
- create a small script to run both client and server concurrently,
- or add a CONTRIBUTING.md template.


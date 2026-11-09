# Running this app

## Prerequisites

- Node.js (compatible with Next.js 16)
- npm

## Install dependencies

```bash
npm install
```

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server at http://localhost:3000 with hot reload |
| `npm run build` | Creates a production build in `.next/` |
| `npm run start` | Serves the production build (run `build` first) |
| `npm run lint` | Runs ESLint |

That's it — no extra flags needed. `dev` and `build` already run with the right compiler for this machine (see below).

## Why this app uses `--webpack` instead of the default Turbopack

Next.js 16 uses **Turbopack** by default for both `next dev` and `next build`. Turbopack is a native Rust binary — on Windows that binary is `@next/swc-win32-x64-msvc`.

On this machine, a Windows **Application Control policy** (an enterprise security/allowlisting feature) blocks that native `.node` binary from loading:

```
⚠ Attempted to load @next/swc-win32-x64-msvc, but an error occurred:
An Application Control policy has blocked this file.
```

When the native binary can't load, Next.js falls back to a WebAssembly (WASM) build of SWC. WASM bindings work fine for compiling TypeScript/JSX, but **Turbopack itself requires the native binary** — it cannot run on WASM alone. The result is a hard failure:

```
Error: Turbopack is not supported on this platform (win32/x64) because native
bindings are not available. Only WebAssembly (WASM) bindings were loaded, and
Turbopack requires native bindings.

To build on this platform, use Webpack instead:
  next build --webpack
```

Webpack, unlike Turbopack, doesn't require the native SWC binary to orchestrate the build — it only uses SWC (via WASM) for transforming individual files. That's a workload WASM handles fine. So passing `--webpack` sidesteps the blocked binary entirely while still producing a correct build.

To avoid having to remember the flag, `package.json` bakes it in:

```json
"scripts": {
  "dev": "next dev --webpack",
  "build": "next build --webpack"
}
```

You'll still see the native-binary warning printed during dev/build — it's harmless noise from Next.js probing for the native binary before falling back. It does not affect the output.

### If you run this on a machine without the Application Control restriction

Turbopack will work there and is generally faster. You can drop `--webpack` from the scripts (or just run `next dev` / `next build` directly) to use the default Turbopack pipeline.

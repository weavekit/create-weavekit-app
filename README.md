# create-weavekit-app

> Scaffold a new WeaveKit project interactively.

## Usage

```sh
npm create weavekit-app my-app -- --type=agent
cd my-app
cp .env.example .env      # set DATABASE_URL
weave migrate             # schema.json → PostgreSQL tables
weave dev                 # http://localhost:3000
```

Or run it directly:

```sh
npx create-weavekit-app my-app --type=agent
```

## Options

| Option | Description |
| --- | --- |
| `<name>` | Project directory name (required) |
| `--type` | Starting preset: `agent` (default), `governance`, `service`, `business` |
| `--yes` | Accept all defaults (a name is still required) |
| `--no-git` | Skip `git init` |
| `--force` | Scaffold into a non-empty directory |

## What it generates

A runnable project containing:

- `weavekit.config.ts` — the engine wiring (`satisfies EngineConfig`)
- `objects/leads/schema.json` — an example object with a small RBAC demo
- `main.ts` — the server entry (`createEngine` + `app.listen`)
- `.env.example` — placeholder for `DATABASE_URL`
- an optional `git init`

All project operations go through the `weave` CLI, which ships with
[`@weave-kit/engine`](https://github.com/weavekit/engine).

## Requirements

- Node.js 24 LTS

## License

[MIT](LICENSE)

---
title: Generated project
description: The files the scaffolder writes.
---

A runnable project contains:

| File | Purpose |
| --- | --- |
| `weavekit.config.ts` | Engine wiring (`satisfies EngineConfig`): `projectType`, optional `subsystems`, `features`, `schemaDir`, `auth`, and `adapters` |
| `objects/leads/schema.json` | An example object with a small RBAC demo |
| `main.ts` | Server entry: `createEngine(config)` and `app.listen`, with graceful shutdown |
| `package.json` | Scripts (`dev`/`migrate`/`build`/`test`) and the `@weave-kit/engine` dependency |
| `.env.example` | Placeholder for `DATABASE_URL` (and an optional `PORT`) |
| `.gitignore` | Ignores `node_modules/`, `dist/`, `.env` |
| `README.md` | Project summary and the `weave` commands |

## The example object

`objects/leads/schema.json` defines a `leads` object with fields such as `title`, `status`
(`active` | `archived`), `owner_id`, `team_id`, `company`, `amount`, and `source`. It ships with
three roles to demonstrate RBAC:

- `admin` — full access to all fields.
- `sales` — reads only rows it owns (`read: "own"`), cannot read `source`.
- `sales_manager` — reads rows for its team (`read: "team"`), including `source`.

The row scopes come from the `ownership: true` and `team: true` flags on `owner_id` and `team_id`.
Role names are user-defined — they must match the keys in your schema's `permissions`.

## The configuration

`weavekit.config.ts` enables the REST adapter at `/api` and configures the MCP endpoint. MCP
`identities` declare on-behalf-of identities that an agent may act as; RBAC decides each
identity's tool surface. A sample `guardrails` block sets a rate limit and a console alert
channel. Replace the placeholder auth key (`sk-admin`) before using it anywhere real.

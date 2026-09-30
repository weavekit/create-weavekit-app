---
title: Engine integration
description: How a scaffolded project runs on @weave-kit/engine.
---

A scaffolded project depends on `@weave-kit/engine`, which provides both the runtime and the
`weave` CLI. The generated `package.json` wires the common commands:

| Command | What it does |
| --- | --- |
| `weave dev` | Run the engine with hot reload |
| `weave migrate` | Compile `objects/*/schema.json` into PostgreSQL tables |
| `weave build` | Produce a production bundle |
| `weave test` | Run the project's tests |

The project's `main.ts` imports `createEngine` and the local `weavekit.config.ts`, starts the
server, and registers graceful shutdown. The engine derives everything else from the metadata:

- `schema.json` files under `schemaDir` become PostgreSQL tables, a REST API, RBAC rules, an
  audit log, and TypeScript types.
- The REST adapter serves requests under the configured prefix (`/api` by default).
- The MCP endpoint exposes the objects as agent tools, scoped per identity.

Because the engine is headless, the generated project has no UI; consume it from
[`@weave-kit/client`](https://github.com/weavekit/client) or any HTTP/MCP client.

---
title: Getting started
description: Create and run your first WeaveKit project.
---

## Requirements

- Node.js 24 LTS
- A reachable PostgreSQL database

## Create a project

Run the scaffolder with a project name. Add `--type` to skip the interactive prompt:

```sh
npm create weavekit-app my-app -- --type=agent
```

The command creates `./my-app` and, unless `--no-git` is passed, initializes a Git repository
when the directory is not already inside one.

## Configure the database

```sh
cd my-app
cp .env.example .env
```

Set `DATABASE_URL` in `.env` to your PostgreSQL connection string:

```text
DATABASE_URL=postgres://postgres:postgres@localhost:5432/weavekit
```

## Migrate and run

```sh
weave migrate   # compile objects/*/schema.json into PostgreSQL tables
weave dev       # start the engine with hot reload on http://localhost:3000
```

`weave migrate` also generates TypeScript types for your objects, and `weave dev` serves the REST
API under `/api` and the MCP endpoint under `/mcp`.

## Next steps

- [CLI and options](cli-and-options.md) — every flag the scaffolder accepts
- [Generated project](generated-project.md) — the files that were written
- [Engine integration](engine-integration.md) — how the project talks to the engine

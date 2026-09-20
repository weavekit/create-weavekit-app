---
title: create-weavekit-app
description: Scaffold a runnable WeaveKit project with an interactive CLI.
---

`create-weavekit-app` scaffolds a runnable WeaveKit project: the engine wiring, an example object
with a small RBAC demo, a server entry, and an `.env.example`. All project operations then go
through the `weave` CLI, which ships with [`@weave-kit/engine`](https://github.com/weavekit/engine).

```sh
npm create weavekit-app my-app -- --type=agent
cd my-app
cp .env.example .env      # set DATABASE_URL
weave migrate             # schema.json -> PostgreSQL tables
weave dev                 # http://localhost:3000
```

See [Getting started](getting-started.md) for the full walkthrough, [CLI and options](cli-and-options.md)
for the flags, [Type presets](type-presets.md) to choose a starting point, and
[Generated project](generated-project.md) for what ends up on disk.

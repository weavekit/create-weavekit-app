---
title: Type presets
description: The four starting presets and how they configure the project.
---

The `--type` value selects a starting preset: it sets `projectType` in `weavekit.config.ts`,
chooses the initial subsystem composition, and writes a one-line narrative into the config and the
generated README. The core engine is always enabled; a preset never trims it.

| Preset | Narrative | Adds |
| --- | --- | --- |
| `agent` (default) | AI-Agent backend — metadata-driven objects with REST access for AI agents | base field types only |
| `governance` | Governance platform — auditable, permission-scoped business objects | semantic field types |
| `service` | Business service — headless backend with RBAC and a REST API | semantic field types, script subsystem |
| `business` | Business backend — objects and formulas on PostgreSQL | semantic field types, script subsystem |

## Field-type gating

`agent` presets whitelist only the engine's primitive field types. The other presets additionally
whitelist the semantic field types (for example `person` and `department`). The whitelist is
written to `features.fieldTypes` in `weavekit.config.ts` and is fail-closed: a schema using a type
outside the list is rejected. Extend the list in the config to opt in to more types.

## Script subsystem

`service` and `business` enable the script subsystem:

```ts
subsystems: {
  script: { enabled: true },
},
```

Script hooks run sandboxed in isolated workers (`*.server.js`). The other presets leave the
subsystem out, so it costs nothing at runtime until you enable it.

## Workflow

Presets never enable a state machine. It is declaration-driven and opt-in per object:

```sh
weave workflow:open <object>      # adds workflowEnabled: true + a starter workflow.json
```

Only the `onTimeout` timer scheduler is a subsystem — add it with `weave module:add workflow` when you
use state timeouts. See the engine [workflow tutorial](https://github.com/weavekit/engine/blob/main/docs/guides/workflow-tutorial.md).

## About `business`

`business` is currently a headless backend preset (REST/MCP/RBAC/audit/script) — it generates no UI.

You can change the composition later with the CLI (`weave module:add` / `weave module:remove`);
`weavekit.config.ts` is the source of truth.

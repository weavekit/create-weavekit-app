---
title: CLI and options
description: Arguments and flags accepted by create-weavekit-app.
---

Both invocation styles are equivalent:

```sh
npm create weavekit-app my-app -- --type=agent
npx create-weavekit-app my-app --type=agent
```

## Arguments

| Argument | Description |
| --- | --- |
| `<name>` | Project directory name (required) |

## Options

| Option | Description |
| --- | --- |
| `--type`, `-t` | Starting preset: `agent` (default), `governance`, `service`, `business` |
| `--yes` | Accept all defaults (the project name is still required) |
| `--no-git` | Skip `git init` |
| `--force` | Write into a directory that already contains files |

Without `--type`, the CLI prompts for the preset interactively. With `--yes`, it uses the default
preset (`agent`) and skips the prompt. An unknown `--type` value is rejected before anything is
written.

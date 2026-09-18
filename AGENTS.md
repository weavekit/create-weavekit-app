# create-weavekit-app — architecture notes

CWA (create-weavekit-app) is the **entry scaffolder** for a new project, independent of the `weave`
CLI (which ships in `@weave-kit/engine`). Read this file only when changing this package or the
scaffolding flow. Deeper CLI/scaffold detail lives in the engine repo's
[`docs/06-weave-cli.md`](https://github.com/weavekit/engine/blob/main/docs/06-weave-cli.md).

## Positioning (hard constraint)

- Responsibility = interactively generate a runnable WeaveKit project directory. It ships as
  **its own package** (`create-weavekit-app`, MIT), never merged into the engine.
- **Scaffolding only**: it hands the generated project to the user's `weave` commands; it does
  **not** run migrations or builds itself.

## Current state

- `bin` = `./dist/index.js` (built by `npm run build`; during development `npx tsx src/index.ts`).
  Entry `src/index.ts` + `src/args.ts` (CLI argument parsing).
- Dependencies: `prompts` (interaction), `validate-npm-package-name` (name validation),
  `@weave-kit/engine` (provides `scaffoldProject`/`PROJECT_TYPES`/`ProjectType`).
- Command shape: `create-weavekit-app <name> [--yes] [--type=agent|governance|service|business]
  [--no-git] [--force]`
  - `--yes` takes all defaults in one line (a name is required); when arguments are missing,
    `prompts` asks for name/type (default agent)/git (default true).
  - The name is validated with `validate-npm-package-name`; type must be in `PROJECT_TYPES`
    (out of range throws "unknown --type").
  - Scaffolding is the engine's `scaffoldProject` (the same code path as the former `weave init`) →
    the output always includes the leads example object and an optional `git init`.
- **`weave init` was removed** — the only project-scaffolding entry point is `create-weavekit-app`.
- During development, `npm link` in the package directory makes it globally available; the
  `npm create weavekit-app` (npx mapping) form is an alternative.

## Key conventions

- Output includes: a `schema.json` skeleton, `weavekit.config.ts`, `main.ts` (`createEngine` +
  `app.listen`, the default entry for `weave build`/`dev`), `.env.example`, and an optional
  `git init`.
- **Object-level `objects/<name>/server.js` is a sandbox hook** (requires the script subsystem): the
  scaffold does not generate it; `weave object:create <name>` generates both `schema.json` and
  `server.js` when creating an object.
- The product contract (`weave` command principles) is in the engine repo's
  [`AGENTS.md`](https://github.com/weavekit/engine/blob/main/AGENTS.md): internal project operations
  always go through `weave`, never around it.

## Maintenance rules

- Error messages / CLI help follow the engineering i18n style (English text + concise wording) and
  do not conflict with the engine's error catalog.

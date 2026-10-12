# Changelog

All notable changes to `create-weavekit-app`. Format follows
[Keep a Changelog](https://keepachangelog.com/); the project uses [Semantic Versioning](https://semver.org/).

## [1.1.0]

Scaffolds projects on `@weave-kit/engine@2.0.0` (pinned as `^2.0.0` in the generated `package.json`).

### Changed

- Generated projects depend on `@weave-kit/engine@^2.0.0` (the 2.0 breaking release: shared
  `@weave-kit/contract` package, `tenant`→`scope`, retired layout/pages groundwork).

### Removed

- The `business` preset (`--type=business`). `--type` is now `agent | governance | service`; use
  `service` for a headless business backend.

## [1.0.5]

Scaffolds projects on `@weave-kit/engine@1.8.0` (pinned as `^1.8.0` in the generated `package.json`).

### Changed

- Generated projects depend on `@weave-kit/engine@^1.8.0` (adds `weave doctor --report`, a redacted
  local-only deployment profile; additive since 1.0).

## [1.0.4]

Scaffolds projects on `@weave-kit/engine@1.7.0` (pinned as `^1.7.0` in the generated `package.json`).

### Changed

- Generated projects depend on `@weave-kit/engine@^1.7.0` (adds built-in OIDC/JWT auth via `auth.oidc`
  and MCP OAuth protected-resource metadata; additive since 1.0).

## [1.0.3]

Scaffolds projects on `@weave-kit/engine@1.6.0` (pinned as `^1.6.0` in the generated `package.json`).

### Changed

- Generated projects depend on `@weave-kit/engine@^1.6.0` (adds `EngineConfig.systemSchema` — an
  optional dedicated schema for the engine's own tables; additive since 1.0).

## [1.0.2]

Scaffolds projects on `@weave-kit/engine@1.5.0` (pinned as `^1.5.0` in the generated `package.json`).

### Added

- The generated `weavekit.config.ts` shows a commented `prompts` provider example — where a project
  adds its own business MCP prompts (user-invoked templates); the engine's schema-derived built-ins
  are always on. See the engine's MCP prompts guide.
- The `governance` preset now enables the audit subsystem in the generated config, with
  `mode: 'transactional'` (the audit row is written inside the business transaction — crash-safe).

### Changed

- Generated projects depend on `@weave-kit/engine@^1.5.0` (MCP prompts; governance audit default;
  configurable list `total`; additive since 1.0).
- The `business` note no longer mentions the retired UI groundwork (`*.client.js` / `pages` layouts).

## [1.0.1]

Scaffolds projects on `@weave-kit/engine@1.3.0` (pinned as `^1.3.0` in the generated `package.json`).

### Changed

- Generated projects depend on `@weave-kit/engine@^1.3.0` (MCP approval tools + resources, expanded
  formula catalog). Engine adds only additive surface since 1.0, so no scaffold changes.

## [1.0.0]

Scaffolds projects on `@weave-kit/engine@1.0.0` (pinned as `^1.0.0` in the generated `package.json`).

### Changed

- Generated projects depend on `@weave-kit/engine@^1.0.0` (the G1 contract-freeze release).

## [0.11.0]

Scaffolds projects on `@weave-kit/engine@0.11.0` (pinned as `^0.11.0` in the generated `package.json`).

### Changed

- Generated projects depend on `@weave-kit/engine@^0.11.0` (Agent Execution pipeline + Evidence).

## [0.10.0]

Scaffolds projects on `@weave-kit/engine@0.10.0` (pinned as `^0.10.0` in the generated `package.json`).

### Changed

- Generated projects depend on `@weave-kit/engine@^0.10.0` (QueryBudget).

## [0.9.0]

Scaffolds projects on `@weave-kit/engine@0.9.0` (pinned as `^0.9.0` in the generated `package.json`).

### Changed

- Generated projects depend on `@weave-kit/engine@^0.9.0` (schema revisions / atomic deploy, audit
  modes, cursor pagination, explicit access principal).

## [0.8.0]

Scaffolds projects on `@weave-kit/engine@0.8.0` (pinned as `^0.8.0` in the generated `package.json`).

### Changed

- Generated projects depend on `@weave-kit/engine@^0.8.0` (GraphQL adapter, named enums / schema v6).

## [0.7.0]

Scaffolds projects on `@weave-kit/engine@0.7.0` (pinned as `^0.7.0` in the generated `package.json`)
and requires Node 22+.

### Changed

- Requires Node 22+ (was Node 24).
- Generated projects declare `engines.node >=22`.

## [0.6.0]

Scaffolds projects on `@weave-kit/engine@0.6.0` (pinned as `^0.6.0` in the generated
`package.json`).

### Changed

- Type presets whitelist the `user` field type (renamed from `person`).
- The sample `leads` object uses a department-scoped permission, matching the engine's new
  `own | department | all` row scope.
- Type presets note the opt-in workflow subsystem.
- Docs reorganized into numbered pages.

### Breaking

- Generated projects depend on `@weave-kit/engine@^0.6.0` — see the engine changelog for the data-model
  and workflow changes.

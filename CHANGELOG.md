# Changelog

All notable changes to `create-weavekit-app`. Format follows
[Keep a Changelog](https://keepachangelog.com/); the project uses [Semantic Versioning](https://semver.org/).

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

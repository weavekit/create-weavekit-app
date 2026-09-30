# Changelog

All notable changes to `create-weavekit-app`. Format follows
[Keep a Changelog](https://keepachangelog.com/); the project uses [Semantic Versioning](https://semver.org/).

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

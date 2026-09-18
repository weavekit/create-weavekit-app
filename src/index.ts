#!/usr/bin/env node
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import prompts from 'prompts';
import { PROJECT_TYPES, scaffoldProject, type ProjectType } from '@weave-kit/engine';
import { assertValidName, parseArgs } from './args.js';

/**
 * Interactive project scaffolder — `create-weavekit-app <name>` (create-next-app style).
 *
 * - `create-weavekit-app my-app --yes` — all defaults, one line, no prompts.
 * - `create-weavekit-app my-app` — prompts for the type preset + git init.
 * - `create-weavekit-app` — prompts for the project name too.
 *
 * Scaffolding itself is the engine's `scaffoldProject` (same code path as the
 * removed `weave init`), so the generated project always includes the leads
 * example object and a git repo when requested.
 */

const PRESET_CHOICES = Object.values(PROJECT_TYPES).map((value) => ({ title: value, value }));

async function promptName(): Promise<string> {
  const response = await prompts({
    type: 'text',
    name: 'name',
    message: 'What is your project named?',
    validate: (value: string) => {
      assertValidName(value);
      return true;
    },
  });
  if (response.name === undefined) process.exit(0); // cancelled (Ctrl+C)
  return response.name as string;
}

async function promptType(): Promise<ProjectType> {
  const response = await prompts({
    type: 'select',
    name: 'type',
    message: 'What project type?',
    choices: PRESET_CHOICES,
    initial: 0, // agent
  });
  if (response.type === undefined) process.exit(0);
  return response.type as ProjectType;
}

async function promptGit(): Promise<boolean> {
  const response = await prompts({
    type: 'confirm',
    name: 'git',
    message: 'Initialize a git repository?',
    initial: true,
  });
  if (response.git === undefined) process.exit(0);
  return response.git as boolean;
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));

  // resolve missing values interactively (unless --yes, which uses defaults)
  const name = options.name ?? (options.yes ? undefined : await promptName());
  const type = options.type ?? (options.yes ? PROJECT_TYPES.AGENT : await promptType());
  const git = options.git ?? (options.yes ? true : await promptGit());
  if (name === undefined) throw new Error('project name is required');

  assertValidName(name);
  const dir = resolve(process.cwd(), name);
  await mkdir(dir, { recursive: true });

  const result = await scaffoldProject(dir, { type, force: options.force, git });

  console.log(`\nCreated project "${name}" in ${dir}`);
  console.log(`  files: ${result.created.length}`);
  if (result.skipped.length > 0) {
    console.log(`  skipped (use --force to overwrite): ${result.skipped.join(', ')}`);
  }
  if (result.gitInit) console.log('  initialized git repository');
  if (type === 'business') {
    console.log(
      '\n> Note: `business` is currently a headless backend preset (REST/MCP/RBAC/audit/script).\n' +
        '  No UI is scaffolded; *.client.js / pages layouts are experimental groundwork with no renderer yet.',
    );
  }
  console.log('\nNext steps:');
  console.log(`  cd ${name}`);
  console.log('  cp .env.example .env');
  console.log('  weave migrate');
  console.log('  weave dev');
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});

import validateProjectName from 'validate-npm-package-name';
import { PROJECT_TYPES, type ProjectType } from '@weave-kit/engine';

/** parsed command-line options for the scaffolder */
export interface CliOptions {
  name?: string;
  type?: ProjectType;
  git?: boolean;
  force: boolean;
  yes: boolean;
}

/** parse argv (after the script) into options; throws on invalid input */
export function parseArgs(argv: string[]): CliOptions {
  const positional: string[] = [];
  const options: CliOptions = { force: false, yes: false };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]!;
    if (arg === '--yes' || arg === '-y') {
      options.yes = true;
    } else if (arg === '--force' || arg === '-f') {
      options.force = true;
    } else if (arg === '--git') {
      options.git = true;
    } else if (arg === '--no-git') {
      options.git = false;
    } else if (arg === '--type' || arg === '-t') {
      const value = argv[i + 1];
      if (value === undefined || value.startsWith('-')) {
        throw new Error(`--type requires a value (${Object.values(PROJECT_TYPES).join('|')})`);
      }
      options.type = value as ProjectType;
      i += 1;
    } else if (arg.startsWith('--type=')) {
      options.type = arg.slice('--type='.length) as ProjectType;
    } else if (arg.startsWith('-')) {
      throw new Error(`unknown option: ${arg}`);
    } else {
      positional.push(arg);
    }
  }

  if (positional.length > 1) throw new Error(`unexpected extra arguments: ${positional.slice(1).join(' ')}`);
  options.name = positional[0];

  // --yes requires a name (create-next-app semantics: defaults need a target)
  if (options.yes && options.name === undefined) {
    throw new Error('usage: create-weavekit-app <project-name> [--yes] [--type=agent|governance|service|business] [--no-git]');
  }
  if (options.type !== undefined && !(Object.values(PROJECT_TYPES) as string[]).includes(options.type)) {
    throw new Error(`unknown --type "${options.type}" (expected ${Object.values(PROJECT_TYPES).join('|')})`);
  }
  return options;
}

/** validate a project name against npm package-name rules; throws on invalid */
export function assertValidName(name: string): void {
  const result = validateProjectName(name);
  if (!result.validForNewPackages) {
    const why = [...(result.errors ?? []), ...(result.warnings ?? [])].join('; ');
    throw new Error(`invalid project name "${name}" — ${why}`);
  }
}

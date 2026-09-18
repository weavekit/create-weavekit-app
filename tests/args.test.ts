import { describe, it, expect } from './helpers/test.js';import { assertValidName, parseArgs } from '../src/args.js';

describe('parseArgs', () => {
  it('parses name + --type= + --yes', () => {
    expect(parseArgs(['my-app', '--type=agent', '--yes'])).toEqual({
      name: 'my-app',
      type: 'agent',
      git: undefined,
      force: false,
      yes: true,
    });
  });

  it('parses --type space-separated + -t short flag', () => {
    expect(parseArgs(['my-app', '--type', 'business']).type).toBe('business');
    expect(parseArgs(['my-app', '-t', 'service']).type).toBe('service');
  });

  it('--git / --no-git / --force', () => {
    expect(parseArgs(['my-app', '--no-git']).git).toBe(false);
    expect(parseArgs(['my-app', '--git']).git).toBe(true);
    expect(parseArgs(['my-app', '--force']).force).toBe(true);
  });

  it('--yes missing name -> error', () => {
    expect(() => parseArgs(['--yes'])).toThrow(/project-name/);
  });

  it('invalid --type -> error', () => {
    expect(() => parseArgs(['my-app', '--type=foo'])).toThrow(/unknown --type "foo"/);
  });

  it('invalid option -> error', () => {
    expect(() => parseArgs(['my-app', '--bogus'])).toThrow(/unknown option/);
  });

  it('extra positional argument -> error', () => {
    expect(() => parseArgs(['a', 'b'])).toThrow(/unexpected extra arguments/);
  });

  it('no name and no --yes -> allowed (prompt interactively)', () => {
    expect(parseArgs([]).name).toBeUndefined();
    expect(parseArgs(['--type=agent']).name).toBeUndefined();
  });
});

describe('assertValidName', () => {
  it('valid names pass', () => {
    expect(() => assertValidName('my-app')).not.toThrow();
    expect(() => assertValidName('my_app')).not.toThrow();
    expect(() => assertValidName('@scope/pkg')).not.toThrow();
  });

  it('invalid name errors', () => {
    expect(() => assertValidName('My App')).toThrow();
    expect(() => assertValidName('my app')).toThrow();
    expect(() => assertValidName('node_modules')).toThrow();
    expect(() => assertValidName('.hidden')).toThrow();
  });
});

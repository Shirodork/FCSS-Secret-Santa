import { afterEach, describe, expect, it, vi } from 'vitest';
import { decryptText } from './crypto';
import { generateAssignmentLink } from './links';

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe('generateAssignmentLink', () => {
  it.each([
    '/FCSS-Secret-Santa/',
    '/FCSS-Secret-Santa',
    '/FCSS-Secret-Santa/pairing/',
  ])('keeps the repository path when opened at %s', async (pathname) => {
    vi.stubEnv('BASE_URL', '/FCSS-Secret-Santa/');
    vi.stubGlobal('window', {
      location: { origin: 'https://shirodork.github.io', pathname },
      crypto: globalThis.crypto,
    });

    const url = new URL(await generateAssignmentLink('Alice & Bob', 'Zoë'));

    expect(url.origin).toBe('https://shirodork.github.io');
    expect(url.pathname).toBe('/FCSS-Secret-Santa/pairing/');
    expect(url.searchParams.get('from')).toBe('Alice & Bob');
    expect(await decryptText(url.searchParams.get('to')!)).toBe('Zoë');
    expect(url.searchParams.has('info')).toBe(false);
  });

  it('supports root hosting and preserves hints and instructions', async () => {
    vi.stubEnv('BASE_URL', '/');
    vi.stubGlobal('window', {
      location: { origin: 'https://example.com', pathname: '/' },
      crypto: globalThis.crypto,
    });

    const url = new URL(await generateAssignmentLink(
      'Alice', 'Bob', 'Books & art', '  Budget: $20\nHave fun!  ',
    ));

    expect(url.pathname).toBe('/pairing/');
    expect(JSON.parse(await decryptText(url.searchParams.get('to')!))).toEqual({
      name: 'Bob', hint: 'Books & art',
    });
    expect(url.searchParams.get('info')).toBe('Budget: $20\nHave fun!');
  });
});

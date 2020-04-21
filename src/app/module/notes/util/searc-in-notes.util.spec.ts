import { SearchInNotesUtil } from './search-in-notes.util';

describe('Search in notes', () => {
  it('empty notes', () => {
    const result = SearchInNotesUtil.search('a', undefined);
    expect(result).toBe(undefined);
  });

  it(`empty search'`, () => {
    const result = SearchInNotesUtil.search(undefined, [{ id: '1', title: 'bbb' }]);
    expect(result.length).toBe(1);
  });

  it('normal search', () => {
    const result = SearchInNotesUtil.search('bb', [{ id: '1', title: 'bbb' }, { id: '1', title: 'aaa' }]);
    expect(result.length).toBe(1);
    expect(result[0].title).toBe('bbb');
  });
});

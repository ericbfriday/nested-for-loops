import { Entity, CodeState } from './code.reducer';
import { codeQuery } from './code.selectors';

describe('Code Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCodeId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCode = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      code: {
        list: [
          createCode('PRODUCT-AAA'),
          createCode('PRODUCT-BBB'),
          createCode('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Code Selectors', () => {
    it('getAllCode() should return the list of Code', () => {
      const results = codeQuery.getAllCode(storeState);
      const selId = getCodeId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedCode() should return the selected Entity', () => {
      const result = codeQuery.getSelectedCode(storeState);
      const selId = getCodeId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = codeQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = codeQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

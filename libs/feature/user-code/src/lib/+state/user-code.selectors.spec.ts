import { Entity, UserCodeState } from './user-code.reducer';
import { userCodeQuery } from './user-code.selectors';

describe('UserCode Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUserCodeId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createUserCode = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      userCode: {
        list: [
          createUserCode('PRODUCT-AAA'),
          createUserCode('PRODUCT-BBB'),
          createUserCode('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('UserCode Selectors', () => {
    it('getAllUserCode() should return the list of UserCode', () => {
      const results = userCodeQuery.getAllUserCode(storeState);
      const selId = getUserCodeId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedUserCode() should return the selected Entity', () => {
      const result = userCodeQuery.getSelectedUserCode(storeState);
      const selId = getUserCodeId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getLoaded() should return the current \'loaded\' status', () => {
      const result = userCodeQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it('getError() should return the current \'error\' storeState', () => {
      const result = userCodeQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

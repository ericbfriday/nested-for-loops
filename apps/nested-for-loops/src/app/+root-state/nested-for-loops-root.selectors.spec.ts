import {
  Entity,
  NestedForLoopsRootState
} from './nested-for-loops-root.reducer';
import { nestedForLoopsRootQuery } from './nested-for-loops-root.selectors';

describe('NestedForLoopsRoot Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getNestedForLoopsRootId = it => it.id;

  let storeState;

  beforeEach(() => {
    const createNestedForLoopsRoot = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      nestedForLoopsRoot: {
        list: [
          createNestedForLoopsRoot('PRODUCT-AAA'),
          createNestedForLoopsRoot('PRODUCT-BBB'),
          createNestedForLoopsRoot('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('NestedForLoopsRoot Selectors', () => {
    it('getAllNestedForLoopsRoot() should return the list of NestedForLoopsRoot', () => {
      const results = nestedForLoopsRootQuery.getAllNestedForLoopsRoot(
        storeState
      );
      const selId = getNestedForLoopsRootId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedNestedForLoopsRoot() should return the selected Entity', () => {
      const result = nestedForLoopsRootQuery.getSelectedNestedForLoopsRoot(
        storeState
      );
      const selId = getNestedForLoopsRootId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getLoaded() should return the current \'loaded\' status', () => {
      const result = nestedForLoopsRootQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it('getError() should return the current \'error\' storeState', () => {
      const result = nestedForLoopsRootQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

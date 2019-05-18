import { Entity, WebApisState } from './web-apis.reducer';
import { webApisQuery } from './web-apis.selectors';

describe('WebApis Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getWebApisId = it => it.id;

  let storeState;

  beforeEach(() => {
    const createWebApis = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      webApis: {
        list: [
          createWebApis('PRODUCT-AAA'),
          createWebApis('PRODUCT-BBB'),
          createWebApis('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('WebApis Selectors', () => {
    it('getAllWebApis() should return the list of WebApis', () => {
      const results = webApisQuery.getAllWebApis(storeState);
      const selId = getWebApisId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedWebApis() should return the selected Entity', () => {
      const result = webApisQuery.getSelectedWebApis(storeState);
      const selId = getWebApisId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getLoaded() should return the current \'loaded\' status', () => {
      const result = webApisQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it('getError() should return the current \'error\' storeState', () => {
      const result = webApisQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

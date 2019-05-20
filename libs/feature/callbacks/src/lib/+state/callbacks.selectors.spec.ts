import { CallbacksState, Entity } from './callbacks.reducer';
import { callbacksQuery } from './callbacks.selectors';

describe('Callbacks Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCallbacksId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCallbacks = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      callbacks: {
        list: [
          createCallbacks('PRODUCT-AAA'),
          createCallbacks('PRODUCT-BBB'),
          createCallbacks('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Callbacks Selectors', () => {
    it('getAllCallbacks() should return the list of Callbacks', () => {
      const results = callbacksQuery.getAllCallbacks(storeState);
      const selId = getCallbacksId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedCallbacks() should return the selected Entity', () => {
      const result = callbacksQuery.getSelectedCallbacks(storeState);
      const selId = getCallbacksId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getLoaded() should return the current \'loaded\' status', () => {
      const result = callbacksQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it('getError() should return the current \'error\' storeState', () => {
      const result = callbacksQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

import { CallStackState, Entity } from './call-stack.reducer';
import { callStackQuery } from './call-stack.selectors';

describe('CallStack Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCallStackId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCallStack = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      callStack: {
        list: [
          createCallStack('PRODUCT-AAA'),
          createCallStack('PRODUCT-BBB'),
          createCallStack('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('CallStack Selectors', () => {
    it('getAllCallStack() should return the list of CallStack', () => {
      const results = callStackQuery.getAllCallStack(storeState);
      const selId = getCallStackId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedCallStack() should return the selected Entity', () => {
      const result = callStackQuery.getSelectedCallStack(storeState);
      const selId = getCallStackId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getLoaded() should return the current \'loaded\' status', () => {
      const result = callStackQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it('getError() should return the current \'error\' storeState', () => {
      const result = callStackQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

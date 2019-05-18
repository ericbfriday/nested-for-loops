import { CallStackLoaded } from './call-stack.actions';
import {
  callStackReducer,
  CallStackState,
  Entity,
  initialState
} from './call-stack.reducer';

describe('CallStack Reducer', () => {
  const getCallStackId = it => it.id;
  let createCallStack;

  beforeEach(() => {
    createCallStack = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid CallStack actions ', () => {
    it('should return set the list of known CallStack', () => {
      const callStacks = [
        createCallStack('PRODUCT-AAA'),
        createCallStack('PRODUCT-zzz')
      ];
      const action = new CallStackLoaded(callStacks);
      const result: CallStackState = callStackReducer(initialState, action);
      const selId: string = getCallStackId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = callStackReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

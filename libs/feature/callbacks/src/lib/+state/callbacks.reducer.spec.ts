import { CallbacksLoaded } from './callbacks.actions';
import {
  callbacksReducer,
  CallbacksState,
  Entity,
  initialState
} from './callbacks.reducer';

describe('Callbacks Reducer', () => {
  const getCallbacksId = it => it['id'];
  let createCallbacks;

  beforeEach(() => {
    createCallbacks = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Callbacks actions ', () => {
    it('should return set the list of known Callbacks', () => {
      const callbackss = [
        createCallbacks('PRODUCT-AAA'),
        createCallbacks('PRODUCT-zzz')
      ];
      const action = new CallbacksLoaded(callbackss);
      const result: CallbacksState = callbacksReducer(initialState, action);
      const selId: string = getCallbacksId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = callbacksReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

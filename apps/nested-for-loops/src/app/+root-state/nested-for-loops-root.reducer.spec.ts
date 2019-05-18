import { NestedForLoopsRootLoaded } from './nested-for-loops-root.actions';
import {
  NestedForLoopsRootState,
  Entity,
  initialState,
  nestedForLoopsRootReducer
} from './nested-for-loops-root.reducer';

describe('NestedForLoopsRoot Reducer', () => {
  const getNestedForLoopsRootId = it => it['id'];
  let createNestedForLoopsRoot;

  beforeEach(() => {
    createNestedForLoopsRoot = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid NestedForLoopsRoot actions ', () => {
    it('should return set the list of known NestedForLoopsRoot', () => {
      const nestedForLoopsRoots = [
        createNestedForLoopsRoot('PRODUCT-AAA'),
        createNestedForLoopsRoot('PRODUCT-zzz')
      ];
      const action = new NestedForLoopsRootLoaded(nestedForLoopsRoots);
      const result: NestedForLoopsRootState = nestedForLoopsRootReducer(
        initialState,
        action
      );
      const selId: string = getNestedForLoopsRootId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = nestedForLoopsRootReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

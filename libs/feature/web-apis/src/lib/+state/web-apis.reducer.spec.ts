import { WebApisLoaded } from './web-apis.actions';
import {
  WebApisState,
  Entity,
  initialState,
  webApisReducer
} from './web-apis.reducer';

describe('WebApis Reducer', () => {
  const getWebApisId = it => it['id'];
  let createWebApis;

  beforeEach(() => {
    createWebApis = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid WebApis actions ', () => {
    it('should return set the list of known WebApis', () => {
      const webApiss = [
        createWebApis('PRODUCT-AAA'),
        createWebApis('PRODUCT-zzz')
      ];
      const action = new WebApisLoaded(webApiss);
      const result: WebApisState = webApisReducer(initialState, action);
      const selId: string = getWebApisId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = webApisReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

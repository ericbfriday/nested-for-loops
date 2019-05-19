import { CodeLoaded } from './code.actions';
import { CodeState, Entity, initialState, codeReducer } from './code.reducer';

describe('Code Reducer', () => {
  const getCodeId = it => it['id'];
  let createCode;

  beforeEach(() => {
    createCode = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Code actions ', () => {
    it('should return set the list of known Code', () => {
      const codes = [createCode('PRODUCT-AAA'), createCode('PRODUCT-zzz')];
      const action = new CodeLoaded(codes);
      const result: CodeState = codeReducer(initialState, action);
      const selId: string = getCodeId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = codeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

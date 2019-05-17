import { UserCodeLoaded } from './user-code.actions';
import {
  UserCodeState,
  Entity,
  initialState,
  userCodeReducer
} from './user-code.reducer';

describe('UserCode Reducer', () => {
  const getUserCodeId = it => it['id'];
  let createUserCode;

  beforeEach(() => {
    createUserCode = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid UserCode actions ', () => {
    it('should return set the list of known UserCode', () => {
      const userCodes = [
        createUserCode('PRODUCT-AAA'),
        createUserCode('PRODUCT-zzz')
      ];
      const action = new UserCodeLoaded(userCodes);
      const result: UserCodeState = userCodeReducer(initialState, action);
      const selId: string = getUserCodeId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = userCodeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

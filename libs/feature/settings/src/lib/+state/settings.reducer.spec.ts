import { SettingsLoaded } from './settings.actions';
import {
  Entity,
  initialState,
  settingsReducer,
  SettingsState
} from './settings.reducer';

describe('Settings Reducer', () => {
  const getSettingsId = it => it['id'];
  let createSettings;

  beforeEach(() => {
    createSettings = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Settings actions ', () => {
    it('should return set the list of known Settings', () => {
      const settingss = [
        createSettings('PRODUCT-AAA'),
        createSettings('PRODUCT-zzz')
      ];
      const action = new SettingsLoaded(settingss);
      const result: SettingsState = settingsReducer(initialState, action);
      const selId: string = getSettingsId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = settingsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

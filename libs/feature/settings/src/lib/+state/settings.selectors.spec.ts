import { Entity, SettingsState } from './settings.reducer';
import { settingsQuery } from './settings.selectors';

describe('Settings Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSettingsId = it => it.id;

  let storeState;

  beforeEach(() => {
    const createSettings = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      settings: {
        list: [
          createSettings('PRODUCT-AAA'),
          createSettings('PRODUCT-BBB'),
          createSettings('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Settings Selectors', () => {
    it('getAllSettings() should return the list of Settings', () => {
      const results = settingsQuery.getAllSettings(storeState);
      const selId = getSettingsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedSettings() should return the selected Entity', () => {
      const result = settingsQuery.getSelectedSettings(storeState);
      const selId = getSettingsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getLoaded() should return the current \'loaded\' status', () => {
      const result = settingsQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it('getError() should return the current \'error\' storeState', () => {
      const result = settingsQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

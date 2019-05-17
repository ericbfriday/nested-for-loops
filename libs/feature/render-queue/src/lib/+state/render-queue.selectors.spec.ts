import { Entity, RenderQueueState } from './render-queue.reducer';
import { renderQueueQuery } from './render-queue.selectors';

describe('RenderQueue Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getRenderQueueId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createRenderQueue = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      renderQueue: {
        list: [
          createRenderQueue('PRODUCT-AAA'),
          createRenderQueue('PRODUCT-BBB'),
          createRenderQueue('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('RenderQueue Selectors', () => {
    it('getAllRenderQueue() should return the list of RenderQueue', () => {
      const results = renderQueueQuery.getAllRenderQueue(storeState);
      const selId = getRenderQueueId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedRenderQueue() should return the selected Entity', () => {
      const result = renderQueueQuery.getSelectedRenderQueue(storeState);
      const selId = getRenderQueueId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = renderQueueQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = renderQueueQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

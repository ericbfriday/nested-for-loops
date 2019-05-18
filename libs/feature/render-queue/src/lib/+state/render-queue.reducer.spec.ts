// tslint:disable
import { RenderQueueLoaded } from './render-queue.actions';
import {
  Entity,
  initialState,
  renderQueueReducer,
  RenderQueueState
} from './render-queue.reducer';

describe('RenderQueue Reducer', () => {
  const getRenderQueueId = it => it.id;
  let createRenderQueue;

  beforeEach(() => {
    createRenderQueue = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid RenderQueue actions ', () => {
    it('should return set the list of known RenderQueue', () => {
      const renderQueues = [
        createRenderQueue('PRODUCT-AAA'),
        createRenderQueue('PRODUCT-zzz')
      ];
      const action = new RenderQueueLoaded(renderQueues);
      const result: RenderQueueState = renderQueueReducer(initialState, action);
      const selId: string = getRenderQueueId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = renderQueueReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

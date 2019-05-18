import { Action } from '@ngrx/store';
import { Entity } from './render-queue.reducer';

export enum RenderQueueActionTypes {
  LoadRenderQueue = '[RenderQueue] Load RenderQueue',
  RenderQueueLoaded = '[RenderQueue] RenderQueue Loaded',
  RenderQueueLoadError = '[RenderQueue] RenderQueue Load Error'
}

export class LoadRenderQueue implements Action {
  public readonly type = RenderQueueActionTypes.LoadRenderQueue;
}

export class RenderQueueLoadError implements Action {
  public readonly type = RenderQueueActionTypes.RenderQueueLoadError;
  constructor(public payload: any) {}
}

export class RenderQueueLoaded implements Action {
  public readonly type = RenderQueueActionTypes.RenderQueueLoaded;
  constructor(public payload: Entity[]) {}
}

export type RenderQueueAction =
  | LoadRenderQueue
  | RenderQueueLoaded
  | RenderQueueLoadError;

export const fromRenderQueueActions = {
  LoadRenderQueue,
  RenderQueueLoaded,
  RenderQueueLoadError
};

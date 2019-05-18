import { async, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { LoadRenderQueue, RenderQueueLoaded } from './render-queue.actions';
import { RenderQueueEffects } from './render-queue.effects';

describe('RenderQueueEffects', () => {
  let actions: Observable<any>;
  let effects: RenderQueueEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        RenderQueueEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(RenderQueueEffects);
  });

  describe('loadRenderQueue$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadRenderQueue() });
      expect(effects.loadRenderQueue$).toBeObservable(
        hot('-a-|', { a: new RenderQueueLoaded([]) })
      );
    });
  });
});

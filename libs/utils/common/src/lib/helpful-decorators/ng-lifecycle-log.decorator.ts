/**
 * Custom decorator to allow us to log lifecycle hooks for angular components.
 * This will log the ngOnInit, ngOnDestroy and ngOnChanges. We can add or
 * remove events if needed.
 * @param isProductionEnv Boolean Reference to whether your environment is production or or.
 * Param can be set with the `isDevMode()` helper function from `@angular/core`.
 * #### Example Code
 *
```javascript
	 import { isDevMode } from '@angular/core';

   @Component({ .. })
   @NgLifecycleLog(isDevMode())
	 export class MyExampleComponent {}
	 ```
 * #### Example Console Output:
 *
```terminal
MyExampleComponent - ngOnInit
MyExampleComponent - ngOnChanges > Object { property: SimpleChanges .......}
```
 */
export function NgLifecycleLog(isProductionEnv: boolean): ClassDecorator {
	return function(constructor: any) {
		if (!isProductionEnv) {
			// You can add/remove events for your needs
			const LIFECYCLE_HOOKS = ['ngOnInit', 'ngOnChanges', 'ngOnDestroy'];
			const component = constructor.name;

			LIFECYCLE_HOOKS.forEach(hook => {
				const original = constructor.prototype[hook];

				constructor.prototype[hook] = function(...args) {
					console.log(`%c ${component} - ${hook}`, `color: #4CAF50; font-weight: bold`, ...args);
					original && original.apply(this, args);
				};
			});
		}
	};
}

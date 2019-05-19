import { isDevMode } from '@angular/core';

/**
 * ## Experimental - for dev use only.
 * Decorator that triggers the debugger on specific invocations of a function, as opposed to setting a breakpoint
 * within the file.
 * @param environment A string indicating if the environment is 'DEV' or 'PROD'
 * 	#### Example Code
 *
 * ```javascript
export class ExampleClass {
	constructor() { }
	methodOne() {
		console.log('No breakpoint triggers by default.');
	}
}
************
..
@TriggerDebugger(environment)
ExampleClass.methodOne();
// debugger will be hit for this specific invocation.
```
 *
 */
export function TriggerDebugger(environment: string = '') {
	return function(target: any, key: any, descriptor: any) {
		const originalMethod = descriptor.value;
		descriptor.value = function(...args: any) {
			// tslint:disable-next-line: no-debugger
			if (environment !== 'PROD' || isDevMode()) debugger;
			originalMethod.apply(this, args);
		};
		return descriptor;
	};
}

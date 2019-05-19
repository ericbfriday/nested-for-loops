/**
 * Custom decorator that wraps a function in a setTimeout() call.
 * @param delayInMilliseconds Delay of the setTimeout in ms. Default 0.
 * #### Example Code
 *
```javascript
	export class MyExampleClass {
		constructor(){}

		@TimeoutWrapper()
		exampleMethod() {
			console.log('This method will be executed on the next tick.')
		}

		@TimeoutWrapper(2000)
		anotherExampleMethod() {
			console.log('This method will be executed after 2 seconds.')
		}
	}
```
 */
export function TimeoutWrapper(delayInMilliseconds: number = 0) {
	return function(target: any, key: any, descriptor: any) {
		const originalMethod = descriptor.value;
		descriptor.value = function(...args: any) {
			setTimeout(() => {
				originalMethod.apply(this, args);
			}, delayInMilliseconds);
		};
		return descriptor;
	};
}

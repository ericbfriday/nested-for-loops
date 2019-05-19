import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * This is a custom decorator which will log the value of observables on value change.
 * It pretty prints strings or tables based on data structure.
 * #### Example Code
 *
```javascript
   @Component({ .. })
   export class PostsPageComponent implements OnInit {

		 @Log$
		 posts$ : Observable<Post[]>;

     constructor( private store : Store<any> ) {
       this.posts$ = store.select('posts');
     }
   }
   ```
 */
export function Log$(target: any, propertyKey: string) {
	let propertyValue;

	function getter() {
		return propertyValue;
	}

	function setter(value: any) {
		if (value instanceof Observable) {
			propertyValue = value.pipe(
				tap(res => {
					const isArrayOfObjects = Array.isArray(res) && typeof res[0] === 'object';
					const logType = isArrayOfObjects ? 'table' : 'log';
					console.groupCollapsed(propertyKey);
					console[logType](res);
					console.groupEnd();
				}),
			);
		} else {
			propertyValue = value;
		}
	}

	Object.defineProperty(target, propertyKey, {
		get: getter,
		set: setter,
		enumerable: true,
		configurable: true,
	});
}

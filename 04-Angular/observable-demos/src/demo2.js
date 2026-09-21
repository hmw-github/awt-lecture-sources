import { of } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Operator Demo
 * 
 * - produce squares from number 1-3
 * - subscribe to resulting observable
 * - log to console when results are produced (one by one)
 */

map(x => x * x)(of(1, 2, 3))
.subscribe((v) => console.log(`Output is: ${v}`));

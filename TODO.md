TODO
====

## General

1. 	Method to throw all methods into the global namespace; compute.mean() --> mean(). How to prevent methods from getting clobbered?
2. 	Should methods explicitly handle cases where the input `array` is empty? e.g., `mean([]) === null` or `NaN`, rather than returning `0`, an initialized value.
	- 	How else to distinguish between a mean of `0` and having provided an empty `array`?
	-	Could also throw, but this may be a bit harsh. Type checking and throwing, okay, but throwing due to an empty `array` may be too disruptive.
	- 	see nanmin and nanmax
	-	see prod!!! --> returns `null`
3. 	**performance optimization**
	- 	linspace/logspace/datespace/zip/<any method which creates an output array>
		- 	use push for arrays longer than fast element limit
		-	see incrspace/incrdatespace
4. 	
5. 	in all module examples, reuse compute modules (e.g., for computing sum, mean, etc) --> dev dependencies
6. 	timeseries date utilities
7. 	csv utilities
8. 	json utilities
9. 	tsv utilities
10. other data formats (?)
11. 
12. 
13. 
14. .jscs.json
	-	include jscs makefile target
	- 	use jsdoc [plugin](https://github.com/jscs-dev/jscs-jsdoc)
15. reorganize stats modules
	-	descriptive
	-	nan
	-	incremental
	-	weighted
	-	moving
	- 	multivariate
16. 
17. [pretty exponential](https://github.com/bmcustodio/pretty-exponential)
18. 
19. 
20. 
21. does `Product` belong in `stats`? dido for `sum`?
	-	possibly move to arithmetic
22. 




## Fluent

1. 	implement `then` method, which takes a callback to which data is returned
2. 	how to handle asynchronous computation? Currently, assume all synchronous tasks. If computations are outsourced to other languages, bindings, etc, which are asynchronous, how do we handle that? --> compute.async().roundn().mean()...
3. 




### Accessors

Modules requiring accessor fcns...

1. abs
2. sqrt
3. 
4. erf
5. erfc
6. erfinv
7. erfcinv
8. 
9. 
10. multiply
11. 
12. roundn
13. diff
14. eq
15. neq
16. 
17. 
18. 
19. 
20. isnumeric
21. isnan
22. isfinite
23. isinteger
24. isinf
25. deg2rad
26. rad2deg
27. 
28. 
29. l1norm
30. 
31. linfnorm
32. 
33. cross
34. ...all stats modules
35. 

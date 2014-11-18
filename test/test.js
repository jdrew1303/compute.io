
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	compute = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// FUNCTIONS //

/**
* FUNCTION: test_property( name )
*	Tests that the compute library has a property and that the property value is a function.
*
* @param {string} name - property name
*/
function test_property( name ) {
	it ( 'should have a `'+ name + '` property that is a function', function test() {
		expect( compute ).to.have.property( name ).that.is.a( 'function' );
	});
} // end FUNCTION test_property()


// TESTS //

describe( 'compute.io', function tests() {
	'use strict';

	var properties = [
		'roundn',
		'polyval',
		'reverse',
		'shuffle',
		'circshift',
		'diff',
		'find',
		'deg2rad',
		'rad2deg',
		'issorted',
		'isnumeric',
		'isnan',
		'isfinite',
		'isinteger',
		'isinf',
		'zip',
		'linspace',
		'incrspace',
		'logspace',
		'abs',
		'sqrt',
		'signum',
		'erf',
		'erfc',
		'erfinv',
		'erfcinv',
		'add',
		'subtract',
		'multiply',
		'divide',
		'unique',
		'l1norm',
		'l2norm',
		'linfnorm',
		'lpnorm',
		'dot',
		'cross',
		'min',
		'incrmin',
		'mmin',
		'cmin',
		'max',
		'incrmax',
		'mmax',
		'cmax',
		'range',
		'sum',
		'nansum',
		'incrsum',
		'msum',
		'csum',
		'mean',
		'nanmean',
		'incrmean',
		'mmean',
		'wmean',
		'gmean',
		'nangmean',
		'hmean',
		'nanhmean',
		'qmean',
		'nanqmean',
		'variance',
		'nanvariance',
		'incrvariance',
		'stdev',
		'nanstdev',
		'incrstdev',
		'mode',
		'median',
		'quantile',
		'quantiles',
		'iqr',
		'idr',
		'midrange',
		'midhinge',
		'midsummary',
		'midmean',
		'lmidmean',
		'umidmean',
		'trimean',
		'skewness',
		'kurtosis',
		'hypot',
		'hamdist'
	];

	it( 'should export an object', function test() {
		expect( compute ).to.be.an( 'object' );
	});

	// Run the property tests...
	for ( var i = 0; i < properties.length; i++ ) {
		test_property( properties[ i ] );
	}

	it( 'should have a fluent interface', function test() {
		expect( compute.flow ).to.be.a( 'function' );
	});

});

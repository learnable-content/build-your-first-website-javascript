/**
 * @list of usable assertions
 *
 * ok(state, message); Truthful assertion
 * equal(actual, expected, message); Compares two values and check if they are the same
 * notEqual(actual, expected, message); Compare two values for inequality
 * deepEqual(actual, expected, message); Compare complex objects for equality (arrays, objects)
 * notDeepEqual(actual, expected, message); Compare complex objects for inequality (arrays, objects)
 * strictEqual(actua, expected, message); Compare objects as the with strict type "===" default
 * notStrictEqual(actual, expected, message); Compare objects as the with strict type "===" inequality
 *
 *
 *
 * @list of events on Qunit
 * Log
 * testStart
 * testDone
 * test
 * module
 * moduleStart
 * moduleDone
 * Begin
 * done
 */

QUnit.module("Calculator", {
  beforeEach: function() {
    //setup common objects and setting up the dom for the tests
  },
  afterEach: function() {
    // runs after every tests
    // norm used as clean up after modifying the dom for tests
  }
});

QUnit.test("the ability to add numbers", function(){
  strictEqual(Calculator.add(10,15), 25, "10 + 15  = 25");
  strictEqual(Calculator.add(100,100), 200, "100 + 100  = 200");
  strictEqual(Calculator.add(-10,15), 5, "-10 + 15 = 5");
});

QUnit.test("the ability to substract numbers", function(){
  strictEqual(Calculator.subtract(100,50), 50, "100 - 50 = 50");
});

QUnit.test("the ability to divide numbers", function(){
  strictEqual(Calculator.divide(100,2), 50, "100 / 2 = 50");
  strictEqual(Calculator.divide(100,5), 20, "100 / 5 = 20");
});

QUnit.done(function( details ) {
  console.log( "Total: ", details.total, " Failed: ", details.failed, " Passed: ", details.passed, " Runtime: ", details.runtime );
});

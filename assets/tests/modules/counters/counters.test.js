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

// tests for contact form
QUnit.module("Counters");

QUnit.test("The counters are triggered", function() {
  ok(true);
});

// Let's check counter one's speed
QUnit.test("Check counter one", function() {
  equal(AnalyticsCounters.limits.limit0, 50000, 'Limit is ' + AnalyticsCounters.limits.limit0);
});

QUnit.test("Check second counter", function() {
  equal(AnalyticsCounters.limits.limit1, 1032, 'Limit is ' + AnalyticsCounters.limits.limit1);
});

QUnit.test("Check third counter", function() {
  equal(AnalyticsCounters.limits.limit2, 5400, 'Limit is ' + AnalyticsCounters.limits.limit2);
});

QUnit.test("Check last counter ", function() {
  equal(AnalyticsCounters.limits.limit3, 10300, 'Limit is ' + AnalyticsCounters.limits.limit3);
});

QUnit.done(function( details ) {
  console.log( "Total: ", details.total, " Failed: ", details.failed, " Passed: ", details.passed, " Runtime: ", details.runtime );
});
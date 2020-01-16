"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStep = getStep;
exports.getDate = getDate;
exports.year = exports.month = exports.day = exports.hour = exports.minute = void 0;
var minute = 60; // in seconds

exports.minute = minute;
var hour = 60 * minute; // in seconds

exports.hour = hour;
var day = 24 * hour; // in seconds
// https://www.quora.com/What-is-the-average-number-of-days-in-a-month

exports.day = day;
var month = 30.44 * day; // in seconds
// "400 years have 146097 days (taking into account leap year rules)"

exports.month = month;
var year = 146097 / 400 * day; // in seconds

/**
 * Returns a step of gradation corresponding to the unit.
 * @param  {Object[]} gradation
 * @param  {string} unit
 * @return {?Object}
 */

exports.year = year;

function getStep(gradation, unit) {
  for (var _iterator = gradation, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var step = _ref;

    if (step.unit === unit) {
      return step;
    }
  }
}
/**
 * Converts value to a `Date`
 * @param {(number|Date)} value
 * @return {Date}
 */


function getDate(value) {
  return value instanceof Date ? value : new Date(value);
}
//# sourceMappingURL=helpers.js.map
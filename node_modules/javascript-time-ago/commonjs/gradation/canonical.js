"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = require("./helpers");

// just now
// 1 second ago
// 2 seconds ago
// …
// 59 seconds ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 7 days ago
// 1 week ago
// 2 weeks ago
// …
// 3 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
var _default = [{
  factor: 1,
  unit: 'now'
}, {
  threshold: 0.5,
  factor: 1,
  unit: 'second'
}, {
  threshold: 59.5,
  factor: 60,
  unit: 'minute'
}, {
  threshold: 59.5 * 60,
  factor: 60 * 60,
  unit: 'hour'
}, {
  threshold: 23.5 * 60 * 60,
  factor: _helpers.day,
  unit: 'day'
}, {
  threshold: 6.5 * _helpers.day,
  factor: 7 * _helpers.day,
  unit: 'week'
}, {
  threshold: 3.5 * 7 * _helpers.day,
  factor: _helpers.month,
  unit: 'month'
}, {
  threshold: 11.5 * _helpers.month,
  factor: _helpers.year,
  unit: 'year'
}];
exports.default = _default;
//# sourceMappingURL=canonical.js.map
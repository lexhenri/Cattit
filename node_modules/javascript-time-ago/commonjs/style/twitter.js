"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gradation = require("../gradation");

var _locale = require("../locale");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// A cache for `Intl.DateTimeFormat` twitter formatters
// for various locales (is a global variable).
var formatters = {}; // Twitter style relative time formatting.
// ("1m", "2h", "Mar 3", "Apr 4, 2012").
// Seconds, minutes and hours are shown relatively,
// and other intervals can be shown using full date format.

var _default = {
  // Twitter gradation is derived from "canonical" gradation
  // adjusting its "minute" `threshold` to be 45.
  gradation: [// Minutes
  _objectSpread({}, (0, _gradation.getStep)(_gradation.canonical, 'minute'), {
    threshold: 45
  }), // Hours
  (0, _gradation.getStep)(_gradation.canonical, 'hour'), // If `date` and `now` happened the same year,
  // then only output month and day.
  {
    threshold: _gradation.day - 0.5 * _gradation.hour,
    format: function format(value, locale) {
      // Whether can use `Intl.DateTimeFormat`.
      // If `Intl` is not available,
      // or the locale is not supported,
      // then don't override the default labels.

      /* istanbul ignore if */
      if (!(0, _locale.intlDateTimeFormatSupported)()) {
        return;
      }
      /* istanbul ignore else */


      if (!formatters[locale]) {
        formatters[locale] = {};
      }
      /* istanbul ignore else */


      if (!formatters[locale].this_year) {
        // "Apr 11" (MMMd)
        formatters[locale].this_year = new Intl.DateTimeFormat(locale, {
          month: 'short',
          day: 'numeric'
        });
      } // Output month and day.


      return formatters[locale].this_year.format((0, _gradation.getDate)(value));
    }
  }, // If `date` and `now` happened in defferent years,
  // then output day, month and year.
  {
    threshold: function threshold(now, future) {
      if (future) {
        // Jan 1st 00:00 of the next year.
        var nextYear = new Date(new Date(now).getFullYear() + 1, 0);
        return (nextYear.getTime() - now) / 1000;
      } else {
        // Jan 1st of the current year.
        var thisYear = new Date(new Date(now).getFullYear(), 0);
        return (now - thisYear.getTime()) / 1000;
      }
    },
    format: function format(value, locale) {
      // Whether can use `Intl.DateTimeFormat`.
      // If `Intl` is not available,
      // or the locale is not supported,
      // then don't override the default labels.

      /* istanbul ignore if */
      if (!(0, _locale.intlDateTimeFormatSupported)()) {
        return;
      }
      /* istanbul ignore if */


      if (!formatters[locale]) {
        formatters[locale] = {};
      }
      /* istanbul ignore else */


      if (!formatters[locale].other) {
        // "Apr 11, 2017" (yMMMd)
        formatters[locale].other = new Intl.DateTimeFormat(locale, {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      } // Output day, month and year.


      return formatters[locale].other.format((0, _gradation.getDate)(value));
    }
  }],
  flavour: ['tiny', 'short-time', 'narrow', 'short']
};
exports.default = _default;
//# sourceMappingURL=twitter.js.map
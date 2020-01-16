"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = void 0;

var _propTypes = require("prop-types");

var threshold = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.func]);
var gradation = (0, _propTypes.arrayOf)((0, _propTypes.oneOfType)([(0, _propTypes.shape)({
  unit: _propTypes.string.isRequired,
  factor: _propTypes.number,
  granularity: _propTypes.number,
  threshold: threshold // Specific `threshold_[unit]` properties may also be defined

}), (0, _propTypes.shape)({
  format: _propTypes.func.isRequired,
  threshold: threshold // Specific `threshold_[unit]` properties may also be defined

})])); // Date/time formatting style.
// E.g. 'twitter', 'fuzzy', or custom (`{ gradation: […], units: […], flavour: 'long', custom: function }`)

var style = (0, _propTypes.oneOfType)([_propTypes.string, (0, _propTypes.shape)({
  gradation: gradation,
  units: (0, _propTypes.arrayOf)(_propTypes.string),
  flavour: (0, _propTypes.oneOfType)([_propTypes.string, (0, _propTypes.arrayOf)(_propTypes.string)]),
  custom: _propTypes.func
})]);
exports.style = style;
//# sourceMappingURL=PropTypes.js.map
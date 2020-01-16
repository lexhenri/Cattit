"use strict";

var _grade = _interopRequireDefault(require("../source/grade"));

var _gradation = require("../source/gradation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('grade', function () {
  it('should return nothing if no time units are applicable', function () {
    expect((0, _grade.default)(0, null, ['femtosecond'], _gradation.canonical)).to.be.undefined;
  });
  it('should throw if a non-first step does not have a threshold', function () {
    expect((0, _grade.default)(2, null, ['second'], [{
      unit: 'second'
    }])).to.deep.equal({
      unit: 'second'
    });
    expect(function () {
      (0, _grade.default)(2, null, ['second', 'minute'], [{
        unit: 'second'
      }, {
        unit: 'minute'
      }]);
    }).to.throw('Each step of a gradation must have a threshold defined except for the first one. Got "undefined", undefined. Step: {"unit":"minute"}');
  });
  it('should fall back to previous grading scale step if granularity is too high', function () {
    var gradation = _gradation.canonical.slice();

    gradation[1].unit.should.equal('second');
    gradation[1].granularity = 3;
    (0, _grade.default)(1.49, null, ['now', 'second'], gradation).unit.should.equal('now'); // And if there's no previous step, then use the current one.

    gradation.splice(0, 1);
    (0, _grade.default)(1.49, null, ['now', 'second'], gradation).unit.should.equal('second');
  });
});
//# sourceMappingURL=grade.test.js.map
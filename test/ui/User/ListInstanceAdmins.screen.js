var util = require('../util');
var expect = require('chai').expect;

var Screen = function () { };

Screen.prototype.expect = function () {
    var util = require('../util');
    util.expectUrlStartsWith('User/ListInstanceAdmins');
    return this;
};

Screen.prototype.getCount = function () {
    return browser.$$("tbody tr").length;
};

module.exports = new Screen();
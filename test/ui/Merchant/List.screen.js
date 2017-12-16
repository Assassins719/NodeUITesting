var util = require('../util');
var expect = require('chai').expect;

var Screen = function () { };

Screen.prototype.expect = function () {
    var util = require('../util');
    util.expectUrlStartsWith('Merchant/List');
    return this;
};

Screen.prototype.getCount = function () {
    return browser.$$("tbody tr").length;
};

module.exports = new Screen();
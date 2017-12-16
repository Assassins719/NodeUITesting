var expect = require('chai').expect;
var utilApi = require('../../api/util');
var Screen = function () { };

Screen.prototype.expectSuccess = function () {
    var util = require('../util');
    browser.waitForVisible("table.table-bordered.table-striped");
    util.expectUrlStartsWith("Invoices/PayStep3");
    expect(browser.getText("h1")).to.equal("Success");
};


module.exports = new Screen();
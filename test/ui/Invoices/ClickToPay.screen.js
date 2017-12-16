var util = require('../util');
var expect = require('chai').expect;

var Screen = function () { };

/**
 * Navigate to a click-to-pay screen for a particular invoice
 * 
 * @param {number} testInvoiceNumber The number of the invoice being tested (1-100)
 */
Screen.prototype.go = function () {
    var util = require('../util');
    var code = util.getC2PLinkCode(util.getInvoiceId());
    browser.url('Invoices/ClickToPay?code=' + code);
    browser.waitForVisible(".btn-primary");
    return this;
};

Screen.prototype.clickPayRemainingBalance = function () {
    browser.click(".btn-primary");
    return this;
};

module.exports = new Screen();
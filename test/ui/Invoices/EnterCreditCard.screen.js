var expect = require('chai').expect;

var Screen = function () { };

Screen.prototype.expect = function () {
    var util = require('../util');
    browser.waitForVisible("input[name='billing-cc-number']");
    util.expectUrlStartsWith("Invoices/EnterCreditCard");
    return this;
};

Screen.prototype.enterCreditCard = function () {
    browser.setValue("input[name='billing-cc-number']", "4111111111111111");
    browser.setValue("input[name='billing-cc-exp']", "0318");
    browser.setValue("input[name='billing-cc-cvv']", "123");
    return this;
};

Screen.prototype.submit = function () {
    browser.$(".btn-primary").click();
    return this;
};

module.exports = new Screen();
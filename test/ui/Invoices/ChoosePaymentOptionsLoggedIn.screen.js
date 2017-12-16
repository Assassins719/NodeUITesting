var expect = require('chai').expect;

var Screen = function () { };

Screen.prototype.expect = function () {
    var util = require('../util');
    util.expectUrlStartsWith("Invoices/ChoosePaymentOptionsLoggedIn");
    return this;
};

Screen.prototype.submit = function () {
    browser.waitForEnabled(".btn-primary");
    browser.click(".btn-primary");
    return this;
};

Screen.prototype.checkSaveCc = function () {
    browser.click("input[type=checkbox][name=SaveToVault]");
    return this;
};

Screen.prototype.selectPreviouslySavedCc = function () {
    browser.click("form div:nth-child(2) input[name=PayMethod]");
    return this;
};

module.exports = new Screen();
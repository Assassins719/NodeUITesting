var expect = require('chai').expect;

var Screen = function () { };

Screen.prototype.selectEnterCreditCardNumber = function () {
    browser.click("input[name=PayMethod][value=EnterCcNumber]");
    return this;
};

Screen.prototype.selectUseSavedCreditCard = function () {
    browser.click("input[value='UsePreviouslySavedCcNumber']");
    return this;
};

Screen.prototype.submit = function () {
    browser.click("input[type=submit]");
    return this;
}

Screen.prototype.expect = function () {
    var util = require('../util');
    util.expectUrlStartsWith("Invoices\/ChoosePaymentOptionsNotLoggedIn");
    return this;
};

Screen.prototype.clickSaveCard = function () {
    browser.click("input[name='SaveToVault']");
    return this;
};

module.exports = new Screen();
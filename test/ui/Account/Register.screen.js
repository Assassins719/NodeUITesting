var expect = require('chai').expect;

var Screen = function () { };

Screen.prototype.expect = function () {
    var util = require('../util');
    util.expectUrlStartsWith("Account/Register");
    return this;
};

Screen.prototype.fill = function (email, password) {
    browser.setValue("input[name='Email']", email);
    browser.setValue("input[name='Password']", password);
    browser.setValue("input[name='ConfirmPassword']", password);
    return this;
};

Screen.prototype.submit = function () {
    browser.click("button[type=submit]");
    return this;
};

module.exports = new Screen();
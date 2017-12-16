var expect = require('chai').expect;

var Screen = function () { };

Screen.prototype.go = function () {
    browser.url('Account/Login');
    return this;
};

Screen.prototype.expect = function () {
    var util = require('../util');
    util.expectUrlStartsWith("Account/Login");
    return this;
};

Screen.prototype.login = function (username, password) {
    browser.waitForVisible("input[name='Email']");
    browser.setValue("input[name='Email']", username);
    browser.setValue("input[name='Password']", password);
    browser.click("button[type=submit]");
    return this;
};

Screen.prototype.clickRegister = function () {
    browser.click("[href^='/Account/Register']");
    return this;
};

module.exports = new Screen();
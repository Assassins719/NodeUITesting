var expect = require('chai').expect;

var Screen = function () { };

Screen.prototype.expect = function () {
    var util = require('../util');
    util.expectUrlStartsWith("Instance/Manage");
    return this;
};

// Links
Screen.prototype.clickCompanies = function () { browser.click("[href^='/Company/List/']"); }
Screen.prototype.clickApiKeysC2P = function () { browser.click("[href^='/ApiKey/List/']"); }
Screen.prototype.clickApsApiKeys = function () { browser.click("[href^='/Merchant/ListEntireInstance/']"); }
Screen.prototype.clickInstanceAdmins = function () { browser.click("[href^='/User/ListInstanceAdmins/']"); }

module.exports = new Screen();
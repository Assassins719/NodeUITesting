var util = require('../util');

var Screen = function() { };

Screen.prototype.expectSuccess = function () {
    var util = require('../util');
    var expect = require('chai').expect;
    util.expectUrlStartsWith('Vault/UpdateComplete');
    expect(browser.getText("h1")).to.contain('Credit Card Successfully Updated');
    return this;
};

module.exports = new Screen();
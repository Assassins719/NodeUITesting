var util = require('../util');

var Screen = function() { };

Screen.prototype.expect = function () {
    var util = require('../util');
    util.expectUrlStartsWith('Vault/UpdateInformation/');
    return this;
};

Screen.prototype.fillExpire = function (date) {
    browser.setValue("input[name='billing-cc-exp']", date);
    return this;
};

Screen.prototype.submit = function () {
    browser.$("input.btn.btn-primary").click();
    return this;
};

module.exports = new Screen();
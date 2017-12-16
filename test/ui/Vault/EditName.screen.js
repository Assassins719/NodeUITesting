var util = require('../util');

var Screen = function() { };

Screen.prototype.expect = function () {
    var util = require('../util');
    util.expectUrlStartsWith('Vault/EditName/');
    return this;
};

Screen.prototype.fillName = function (name) {
    browser.setValue("input[name='Name']", name);
    return this;
};

Screen.prototype.submit = function () {
    browser.$("input.btn.btn-primary").click();
    return this;
};

module.exports = new Screen();
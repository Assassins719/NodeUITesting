var Screen = function() { };

Screen.prototype.expect = function () {
    var util = require('../util');
    util.expectUrlStartsWith('Vault/Delete/');
    return this;
};

Screen.prototype.submit = function () {
    browser.$("input.btn.btn-primary").click();
    return this;
};

module.exports = new Screen();
var util = require('../util');
var expect = require('chai').expect;

var Screen = function () { };

Screen.prototype.expect = function () {
    var util = require('../util');
    util.expectUrlStartsWith('Vault/List');
};

Screen.prototype.go = function () {
    browser.url('Vault/List');
    browser.waitForVisible("button.btn.dropdown-toggle");
    return this;
};

Screen.prototype.clickDropdown = function () {
    browser.$("button.btn.dropdown-toggle").click();
    browser.waitForVisible("a[href^='/Vault/Delete']");
    return this;
};
Screen.prototype.clickUpdate = function (){
    this.clickDropdown();
    browser.click("[href^='/Vault/UpdateInformation/']");
    return this;    
}
Screen.prototype.clickDelete = function (){
    this.clickDropdown();
    browser.click("[href^='/Vault/Delete/']");
    return this;    
}
Screen.prototype.clickEditName = function (){
    this.clickDropdown();
    browser.click("[href^='/Vault/EditName/']");
    return this;    
}

/**
 * Get the name of the first card in the list (for testing)
 */
Screen.prototype.getName = function () {
    return browser.getText("table.table-striped tbody tr:first-child td:nth-child(2)");
};

module.exports = new Screen();
var expect = require('chai').expect;
var request = require('request');
var config = require('../../config');
var apiUtils = require('../api/util');
var fs = require("fs");

var Utilities = function () {
    this.screens = require('./screens');
};

/**
 * Reset the test data
 */
Utilities.prototype.reset = function () {
    browser.call(function () {
        return new Promise(function (resolve, reject) {
            apiUtils.resetTesting(function () {
                resolve();
            });
        });
    });
};

// Log in using the standard adam.smith@example.com
Utilities.prototype.logIn = function () {
    this.screens.Account.Login.go()
        .login(config.Ui.Logins.Customer.Username, config.Ui.Logins.Customer.Password);
};

Utilities.prototype.logInInstanceAdmin = function () {
    this.screens.Account.Login.go()
        .login(config.Ui.Logins.InstanceAdmin.Username, config.Ui.Logins.InstanceAdmin.Password);
};

/**
 * Get a unique invoice ID number (1-100).  Avoids conflicts when 
 * running tests in parallel.
 */
Utilities.prototype.getInvoiceId = function () {
    var counter = fs.readFileSync('./counter.private.txt').toString();
    counter = parseInt(counter) + 1;
    var invoiceId = counter;
    fs.writeFileSync('./counter.private.txt', counter);

    return invoiceId;
};

Utilities.prototype.expectUrlStartsWith = function (start) {
    var url = browser.getUrl();
    if (url.indexOf(start) < 0) {
        console.log('Actual URL: ' + url + ".  Expected to include: " + start);
        expect(true).to.equal(false);
    }
};

/**
 * Get the click-to-pay code for a test invoice
 * 
 * @param {number} testInvoiceNumber A number 1-100
 * @return {string} The code for that particular test invoice
 */
Utilities.prototype.getC2PLinkCode = function (testInvoiceNumber) {
    var code = browser.call(function () {
        return new Promise(function (resolve, reject) {
            request.post(config.Api.Endpoint + "invoices/getCode",
            {
                json: {
                    apiKey: config.Api.Key,
                    companyId: config.Api.Company,
                    customerId: config.Api.Customer,
                    invoiceId: "test_" + testInvoiceNumber
                }
            }, function (error, response, body) {
                if (error || body.errorMessage) reject('Error: ' + body.errorMessage);
                else resolve(body.clickToPayLinkCode);
            });        
        });
    });
    return code;
};

Utilities.prototype.logout = function () {
    if (browser.isVisible(".navbar-toggle")) browser.click(".navbar-toggle");
    browser.waitForVisible(".navbar-right li a.dropdown-toggle");
    browser.click(".navbar-right li a.dropdown-toggle");
    browser.click("input[value=Logout]");
};

module.exports = new Utilities();
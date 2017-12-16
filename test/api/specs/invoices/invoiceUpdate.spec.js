var expect = require('chai').expect;
var request = require('request');
var config = require('../../../../config');
var apiUtils = require('../../util');

describe("invoices/update", function () {
    it("should return 300.01 on unfound invoice", function (done) {
        request.post(config.Api.Endpoint + "invoices/update",
            {
                json: {
                    apiKey: config.Api.Key,
                    amount: config.Api.Amount,
                    companyId: config.Api.Company,
                    customerId: config.Api.Customer,
                    invoiceId: "nonexistent_invoice_id"
                }
            }, function (error, response, body) {
                apiUtils.expectApiError(error, response, body, 303);
                done();
            });
    });
});

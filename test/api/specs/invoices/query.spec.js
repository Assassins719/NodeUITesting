var expect = require('chai').expect;
var request = require('request');
var config = require('../../../../config');
var apiUtils = require('../../util');

describe("invoices/query", function () {
    it("should work", function (done) {
        request.post(config.Api.Endpoint + "invoices/query",
            {
                json: {
                    apiKey: config.Api.Key,
                    companyId: config.Api.Company,
                    customerId: config.Api.Customer,
                    invoiceId: config.Api.Invoice
                }
            }, function (error, response, body) {
                apiUtils.expectApiCallSuccess(error, response, body);
                done();
            });
    });
});

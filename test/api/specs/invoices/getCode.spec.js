var expect = require('chai').expect;
var request = require('request');
var config = require('../../../../config');
var apiUtils = require('../../util');

before(function (done) {
	apiUtils.resetTesting(done);
});

describe("invoices/getCode", function () {
    it("should work", function (done) {
        request.post(config.Api.Endpoint + "invoices/getCode",
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

    it("should return 312 on invalid company ID", function (done) {
        request.post(config.Api.Endpoint + "invoices/getCode",
            {
                json: {
                    apiKey: config.Api.Key,
                    companyId: "invalid_company_code",
                    customerId: config.Api.Customer,
                    invoiceId: config.Api.Invoice
                }
            }, function (error, response, body) {
                apiUtils.expectApiError(error, response, body, 312);
                done();
            });
    });
});

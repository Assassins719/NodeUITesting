var expect = require('chai').expect;
var request = require('request');
var config = require('../../../../config');
var apiUtils = require('../../util');

describe("invoices/logExternalPayment", function () {
    it("should work", function (done) {
        request.post(config.Api.Endpoint + "invoices/logExternalPayment",
            {
                json: {
                    apiKey: config.Api.Key,
                    amount: config.Api.Amount,
                    companyId: config.Api.Company,
                    customerId: config.Api.Customer,
                    date: config.Api.DateData,
                    invoiceId: config.Api.Invoice
                }
            }, function (error, response, body) {
                apiUtils.expectApiCallSuccess(error, response, body);
                done();
            });
    });
    it("should return 311 on invalid amount", function (done) {
        request.post(config.Api.Endpoint + "invoices/logExternalPayment",
            {
                json: {
                    apiKey: config.Api.Key,
                    amount: 999999999,
                    companyId: config.Api.Company,
                    customerId: config.Api.Customer,
                    date: config.Api.DateData,
                    invoiceId: config.Api.Invoice
                }
            }, function (error, response, body) {
                apiUtils.expectApiError(error, response, body, 311);
                done();
            });
    });
});


var expect = require('chai').expect;
var request = require('request');
var config = require('../../../../config');
var apiUtils = require('../../util');

describe("invoices/create", function () {
    it("should work", function (done) {
        request.post(config.Api.Endpoint + "invoices/create",
            {
                json: {
                    apiKey: config.Api.Key,
                    amount: config.Api.Amount,
                    companyId: config.Api.Company,
                    customerId: config.Api.Customer,
                    currency: config.Api.Currency,
                    customerName: config.Api.CustomerName,
                    invoiceId: config.Api.DisposableInvoiceId,
                    customerEmail: config.Api.CustomerEmail,
                    orderDescription: config.Api.OrderDescription,
                    poNumber: config.Api.PoNumber,
                    orderId: config.Api.OrderId,
                    shipping: config.Api.Shipping
                }
            }, function (error, response, body) {
                apiUtils.expectApiCallSuccess(error, response, body);
                done();
            });
    });

    it("should return 312 for invalid company ID", function (done) {
        request.post(config.Api.Endpoint + "invoices/create",
            {
                json: {
                    apiKey: config.Api.Key,
                    amount: config.Api.Amount,
                    companyId: "invalid_company_id",
                    customerId: config.Api.Customer,
                    currency: config.Api.Currency,
                    customerName: config.Api.CustomerName,
                    invoiceId: config.Api.DisposableInvoiceId,
                    customerEmail: config.Api.CustomerEmail,
                    orderDescription: config.Api.OrderDescription,
                    poNumber: config.Api.PoNumber,
                    orderId: config.Api.OrderId,
                    shipping: config.Api.Shipping
                }
            }, function (error, response, body) {
                apiUtils.expectApiError(error, response, body, 312);
                done();
            });
    });
});
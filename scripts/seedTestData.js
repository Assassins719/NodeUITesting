/**
 * Create 100 invoices.  Each of these has its payment cleared upon the test reset.  This allows
 * for writing parallel tests.
 */

var request = require('request');
var config = require('../config');

for (var i = 1; i <= 100; i++) {
    request.post(config.Api.Endpoint + "invoices/create",
    {
        json: {
            apiKey: config.Api.Key,
            amount: config.Api.Amount,
            companyId: config.Api.Company,
            customerId: config.Api.Customer,
            currency: config.Api.Currency,
            customerName: config.Api.CustomerName,
            invoiceId: "test_" + i,
            customerEmail: config.Api.CustomerEmail,
            orderDescription: config.Api.OrderDescription,
            poNumber: config.Api.PoNumber,
            orderId: config.Api.OrderId,
            shipping: config.Api.Shipping
        }
    });
}


var expect = require('chai').expect;
var request = require('request');
var config = require('../../../../config');
var apiUtils = require('../../util');

var paymentsList = [];

describe("payments/query", function () {
    it("should work", function (done) {
        request.post(config.Api.Endpoint + "payments/query",
            {
                json: {
                    apiKey: config.Api.Key,
                    companyId: config.Api.Company,
                    customerId: config.Api.Customer,
                }
            }, function (error, response, body) {
                paymentsList = body.payments;
                apiUtils.expectApiCallSuccess(error, response, body);
                done();
            });
    });
    after(function () {
        if (paymentsList != []) {
            describe("payments/markRetrieved", function () {
                it("should work", function (done) {
                    request.post(config.Api.Endpoint + "payments/markRetrieved",
                        {
                            json: {
                                apiKey: config.Api.Key,
                                id: paymentsList[0].id
                            }
                        }, function (error, response, body) {
                            apiUtils.expectApiCallSuccess(error, response, body);
                            done();
                        });
                });
            });
        }
    });
});
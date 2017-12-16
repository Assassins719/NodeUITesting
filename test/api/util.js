var expect = require('chai').expect;
var request = require('request');
var config = require('../../config');

module.exports = {
    /**
     * Call this after every API request to run through the basics,
     * to make sure the request was successful (unless you are testing
     * for an error).
     * 
     * @param {Object} error The error, if any
     * @param {number} response The response code
     * @param {Object} body The response body object
     */
    expectApiCallSuccess: function (error, response, body) {
        expect(error).to.be.null;
        expect(response.statusCode).to.equal(200);
        if (body.statusClassCode != 1) console.log("API error: " + body.errorMessage);
        expect(body.statusClassCode).to.equal(1);
        expect(body.errorMessage).to.be.null;
    },
    expectApiError:function (error, response, body, expectedCode) {
        expect(body.statusCode).to.equal(expectedCode);
    },
	
	resetTesting: function (done) {
		request.get(config.Ui.Endpoint + "SystemAdmin/ResetTesting", function () { done(); });
	}
};
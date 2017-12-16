var expect = require('chai').expect;
var util = require('../util');
var screens = util.screens;

describe('Merchant', function () {
    describe("List", function () {
        it('contains one or more merchants', function () {
            util.logInInstanceAdmin();
            
            screens.Instance.Manage.expect()
                .clickApsApiKeys();
            var count = screens.Merchant.List.expect()
                .getCount();
            expect(count).to.be.at.least(1);
        });
    });
});


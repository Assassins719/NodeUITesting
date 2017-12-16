var expect = require('chai').expect;
var util = require('../util');
var screens = util.screens;
var config = require('../../../config');

describe('ApiKey', function () {
    describe("List", function () {
        it('contains one or more keys', function () {
            util.logInInstanceAdmin();
            
            screens.Instance.Manage.expect()
                .clickApiKeysC2P();
            var count = screens.ApiKey.List.expect()
                .getCount();
            expect(count).to.be.at.least(1);
        });
    });
});


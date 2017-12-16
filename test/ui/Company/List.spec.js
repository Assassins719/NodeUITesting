var expect = require('chai').expect;
var util = require('../util');
var screens = util.screens;
var config = require('../../../config');

describe('Company', function () {
    describe("List", function () {
        it('contains one or more companies', function () {
            util.logInInstanceAdmin();
            
            screens.Instance.Manage.expect()
                .clickCompanies();
            var numCompanies = screens.Company.List.expect()
                .getCount();
            expect(numCompanies).to.be.at.least(1);
        });
    });
});


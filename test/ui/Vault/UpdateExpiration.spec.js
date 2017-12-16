var expect = require('chai').expect;
var util = require('../util');
var screens = util.screens;

describe('Vault', function () {
    describe('Update expiration', function () {
        it('should work', function () {
            util.logIn();
            screens.Vault.List.go()
                .clickUpdate();
            screens.Vault.UpdateInformation.expect()
                .fillExpire("0422")
                .submit();
            screens.Vault.UpdateComplete.expectSuccess();
        });
    });
});
var expect = require('chai').expect;
var util = require('../util');
var screens = util.screens;

describe('Vault', function () {
    describe('Update name', function () {
        it('works', function () {
            util.logIn();
            screens.Vault.List.go()
                .clickEditName();
            screens.Vault.EditName.expect()
                .fillName("New Name")
                .submit();
            screens.Vault.List.expect(); // Expect successful redirect to list screen
        });
    });
});
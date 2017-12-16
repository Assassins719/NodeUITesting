var expect = require('chai').expect;
var util = require('../util');
var screens = util.screens;

describe('Vault', function () {
    describe('Delete', function () {
        it('should work', function () {
            // First, save a new credit card for testing (to avoid depleting all saved cards)
            util.logIn();
            screens.Invoices.ClickToPay.go().clickPayRemainingBalance();
            screens.Invoices.ChoosePaymentOptionsLoggedIn.expect()
                .checkSaveCc()
                .submit();
            screens.Invoices.EnterCreditCard.expect()
                .enterCreditCard()
                .submit();
            screens.Invoices.PayStep3.expectSuccess();

            screens.Vault.List.go()
                .clickDelete();
            screens.Vault.Delete.expect().submit();
            screens.Vault.List.expect(); // Expect success--redirect to list screen
        });
    });
});
var expect = require('chai').expect;
var util = require('../util');
var screens = util.screens;

describe('Invoices/ClickToPay', function () {
    describe('Login and pay', function () {
        it('should work for valid saved credit cards', function () {
            screens.Invoices.ClickToPay
                .go()
                .clickPayRemainingBalance();
            screens.Invoices.ChoosePaymentOptionsNotLoggedIn.expect()
                .selectUseSavedCreditCard()
                .submit();
            screens.Account.Login.expect()
                .login('adam.smith@example.com', 'Password@3');
            screens.Invoices.ChoosePaymentOptionsLoggedIn.expect()
                .selectPreviouslySavedCc()
                .submit();
            screens.Invoices.PayStep3.expectSuccess();
        });
    });
});
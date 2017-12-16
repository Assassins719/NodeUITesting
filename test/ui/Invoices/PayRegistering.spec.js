var expect = require('chai').expect;
var util = require('../util');
var screens = util.screens;
var config = require('../../../config');
var utilApi = require('../../api/util');

describe('Invoices/ClickToPay', function () {
    describe('Register and pay', function () {
        it('should work for valid credit cards', function () {
            screens.Invoices.ClickToPay
                .go()
                .clickPayRemainingBalance();
            screens.Invoices.ChoosePaymentOptionsNotLoggedIn.expect()
                .selectEnterCreditCardNumber()
                .clickSaveCard()
                .submit();
            screens.Account.Login.expect()
                .clickRegister();

            screens.Account.Register.expect()
                .fill('john.smith@example.com', 'Password@3')
                .submit();
            screens.Invoices.EnterCreditCard.expect()
                .enterCreditCard()
                .submit();
            screens.Invoices.PayStep3.expectSuccess();
        });
    });
});

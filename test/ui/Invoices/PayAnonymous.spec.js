var expect = require('chai').expect;
var util = require('../util');
var screens = util.screens;
var config = require('../../../config');

describe('Invoices/ClickToPay', function () {
    describe("Pay anonymously", function () {
        it('should work for valid credit cards', function () {
            screens.Invoices.ClickToPay
                .go()
                .clickPayRemainingBalance();
            screens.Invoices.ChoosePaymentOptionsNotLoggedIn.expect()
                .selectEnterCreditCardNumber()
                .submit();
            screens.Invoices.EnterCreditCard.expect()
                .enterCreditCard()
                .submit();
            screens.Invoices.PayStep3.expectSuccess();
        });
    });
});


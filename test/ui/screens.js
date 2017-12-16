var VaultScreens = function () {
    this.List = require('./Vault/List.screen');
    this.EditName = require('./Vault/EditName.screen');
    this.UpdateInformation = require('./Vault/UpdateInformation.screen');
    this.UpdateComplete = require('./Vault/UpdateComplete.screen');
    this.Delete = require('./Vault/Delete.screen');
}

var InvoicesScreens = function () {
    this.ClickToPay = require('./Invoices/ClickToPay.screen');
    this.ChoosePaymentOptionsNotLoggedIn = require('./Invoices/ChoosePaymentOptionsNotLoggedIn.screen');
    this.ChoosePaymentOptionsLoggedIn = require('./Invoices/ChoosePaymentOptionsLoggedIn.screen');
    this.EnterCreditCard = require('./Invoices/EnterCreditCard.screen');
    this.PayStep3 = require('./Invoices/PayStep3.screen');
};

var MerchantScreens = function () {
    this.List = require('./Merchant/List.screen');
};

var ApiKeyScreens = function () {
    this.List = require('./ApiKey/List.screen');
};

var InstanceScreens = function () {
    this.Manage = require('./Instance/Manage.screen');
};

var AccountScreens = function () {
    this.Login = require('./Account/Login.screen');
    this.Register = require('./Account/Register.screen');
};

var CompanyScreens = function () {
    this.List = require('./Company/List.screen');
};

var Screens = function () {
    this.Invoices = new InvoicesScreens();
    this.Account = new AccountScreens();
    this.Vault = new VaultScreens();
    this.Instance = new InstanceScreens();
    this.Company = new CompanyScreens();
    this.ApiKey = new ApiKeyScreens();
    this.Merchant = new MerchantScreens();
};

module.exports = new Screens();

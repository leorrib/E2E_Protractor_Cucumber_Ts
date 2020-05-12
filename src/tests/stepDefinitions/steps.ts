import { Given, When, Then } from "cucumber";
import { Calculator } from "../../main/Page_Objects/calculator";
import { Angular } from "../../main/Page_Objects/angular";
import { browser } from "protractor";
import chai from "chai";
let calc = new Calculator();
let ang = new Angular();
var expect = chai.expect;

Given('I will navigate to {string} page', async (string) => {
    if (string == "Calculator") {
        await browser.get("http://juliemr.github.io/protractor-demo");
    }
    else if (string == "AngularJs") {
        await browser.get("https://angularjs.org");
    }
});

When('I add two numbers: {string} and {string}', async (string, string2) => {
    await calc.firstBox.sendKeys(string);
    await calc.secondBox.sendKeys(string2);
});

When('I click on header link and navigate to Angular page', async () => {
    await ang.angularIo.click();
}),

Then('the output displayed should be {string}', async (string) => {
    await calc.go.click();
    await calc.result.getText().then(function (text) {
      expect(text).to.equal(string);
    });
});

Then('I enter {string} in the searchbox', async (string) => {
    await ang.searchBox.sendKeys(string);
});
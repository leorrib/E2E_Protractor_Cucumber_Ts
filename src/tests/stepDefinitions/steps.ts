import { Given, When, Then } from "cucumber";
import { Calculator } from "../../main/Page_Objects/calculator";
import { Angular } from "../../main/Page_Objects/angular";
let calc = new Calculator();
let ang = new Angular();

Given('I will navigate to {string} page', async (string) => {
    if (string == "Calculator") {
        await calc.OpenCalculatorSite();
    }
    else if (string == "AngularJs") {
        await ang.openAngularSite();
    }
});

When('I add two numbers: {string} and {string}', async (string, string2) => {
    await calc.enterFirstNumber(string);
    await calc.enterSecondNumber(string2);
});

Then('the output displayed should be {string}', async (string) => {
    await calc.clickGo();
    await calc.compareResult(string);
});

When('I click on header link and navigate to Angular page', async () => {
    await ang.clickHeader();
}),

Then('I enter {string} in the searchbox', async (string) => {
    await ang.searchFor(string);
});
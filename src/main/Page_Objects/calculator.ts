import { browser, ElementFinder, element, by } from "protractor";
import chai from "chai";
var expect = chai.expect;

export class Calculator {

    firstBox:ElementFinder;
    secondBox:ElementFinder;
    go:ElementFinder;
    result:ElementFinder

    constructor(){
        this.firstBox = element(by.model("first"));
        this.secondBox = element(by.model("second"));
        this.go = element(by.id("gobutton"));
        this.result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")); 
    }

    OpenCalculatorSite() {
        return browser.get("http://juliemr.github.io/protractor-demo")
    }

    enterFirstNumber(arg1) {
        return this.firstBox.sendKeys(arg1);
    }

    enterSecondNumber(arg2) {
        return this.secondBox.sendKeys(arg2);
    }

    clickGo() {
        return this.go.click();
    }

    compareResult(string) {   
        return this.result.getText().then(async (text) => { 
            expect(text).to.equal(string) 
        }) 
    }


}
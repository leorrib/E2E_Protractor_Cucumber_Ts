import { ElementFinder, element, by } from "protractor";

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


}
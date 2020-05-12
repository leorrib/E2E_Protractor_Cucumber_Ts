import { browser, ElementFinder, element, by } from "protractor";

export class Angular {

    angularIo:ElementFinder;
    searchBox:ElementFinder;

    constructor() {
        this.angularIo = element(by.partialLinkText("angular.io"));
        this.searchBox = element(by.css("[type='search']"));
    }

    openAngularSite() {
        return browser.get("https://angularjs.org");
    }

    clickHeader() {
        return this.angularIo.click();
    }

    searchFor(word) {
        return this.searchBox.sendKeys(word);
    }
    
}
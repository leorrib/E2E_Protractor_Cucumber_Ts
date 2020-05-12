import { ElementFinder, element, by } from "protractor";

export class Angular {

    angularIo:ElementFinder;
    searchBox:ElementFinder;

    constructor() {
        this.angularIo = element(by.partialLinkText("angular.io"));
        this.searchBox = element(by.css("[type='search']"));
    }
}
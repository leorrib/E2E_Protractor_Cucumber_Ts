import { browser } from "protractor";
import { Status } from "cucumber";

var {After, Before} = require('cucumber');

Before(function () {
  browser.manage().window().maximize();
});

Before({tags: "@angulartesting"}, function () {
  console.log("I execute before tests performed on Angular.io")
});

After({tags: "@angulartesting"}, function () {
  console.log("I execute after tests performed on Angular.io")
});

After(async function (scenario) {
  if(scenario.result.status === Status.FAILED) {
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png")
  }
});
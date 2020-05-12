import { browser } from "protractor";
import { Status } from "cucumber";

var {After, Before} = require('cucumber');

// Before(function () {
//   // This hook will be executed before all scenarios
// });

Before({tags: "@calculatortesting"}, function () {
  browser.manage().window().maximize();
});

Before({tags: "@angulartesting"}, function () {
  console.log("I execute first")
});

After(function () {
  console.log("Scenario is completed")
});

After(async function (scenario) {
  if(scenario.result.status === Status.FAILED) {
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png")
  }
});
import {Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
  capabilities: {
    browserName: 'chrome',
  },
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // path relative to the current config file
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'), 

  specs: [ '../src/tests/features/demo.feature' ],

  cucumberOpts: {
    // require step definitions
    require: [
      './src/tests/stepDefinitions/*.js' // accepts a glob
    ],

    //tags: "@angulartesting",
    format: "json:src/tests/reports/report.json",
  },

  onComplete: () => {
    var options = {
      theme: 'bootstrap',
      jsonFile: './src/tests/reports/report.json',
      output: './src/tests/reports/report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      },
    };
    reporter.generate(options);  
  },

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
  


};

var istanbul = require("istanbul-lib-coverage");
var map = istanbul.createCoverageMap({});

var fs = require("fs");

// The test directory for downloaded files
var tmpDir = "/tmp/globaleaks-downloads";

exports.config = {
  // framework: "jasmine",

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],

  // troubleshoot: false,
  // rootElement: "html",
  // directConnect: true,

  // params: {
    // "takeScreenshot": false,
    // "testFileDownload": true,
    // "tmpDir": tmpDir,
    // "testDir": __dirname
  // },


  // capabilities: {
    // "browserName": "chrome",
    // "chromeOptions": {
      // args: ["--headless", "--disable-gpu", "--window-size=1280,1024"],
      // prefs: {
        // "download": {
          // "prompt_for_download": false,
          // "default_directory": tmpDir
        // }
      // }
    // }
  // },

  // allScriptsTimeout: 60000,

  // jasmineNodeOpts: {
    // isVerbose: true,
    // includeStackTrace: true,
    // defaultTimeoutInterval: 60000
  // },

  plugins: [
    {
      inline: {
        postTest: async function() {
          console.log("inline plugin run")
          // await browser.driver.executeScript("return __coverage__;").then(function(coverage) {
            // map.merge(coverage);
          // });
        }
      }
    }
  ],

  onComplete: async function() {
	  console.log("on complete run: first");
	  console.log(__coverage__);
	  console.log("on complete run: second");
	  await browser.sleep(60000);
    //await browser.driver.executeScript("return __coverage__;").then(function(coverage) {

      // map.merge(coverage);

      // if (!fs.existsSync(".nyc_output")) {
        // fs.mkdirSync(".nyc_output");
      // }

      // fs.writeFileSync(".nyc_output/out.json", JSON.stringify(map));
    //});
  }
};
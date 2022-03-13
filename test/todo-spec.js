const { browser } = require("protractor");


describe('demo test', function() {
  it('should show first and last', function() {
    browser.get('http://localhost:4200/');

    element(by.className('my-input')).sendKeys('protractorFirstName');
    element(by.className('button')).click();
    expect(element(by.className('testprop-result')).getText()).toEqual('protractorFirstName');
    console.log("test 1 end");
  });

  it('should show first and last in result', function() {
    browser.get('http://localhost:4200/');

    element(by.className('my-input')).sendKeys('protractorFirstName');
    element(by.className('button')).click();

    expect(element(by.className('testprop-result')).getText()).toEqual('protractorFirstName');
  });
});


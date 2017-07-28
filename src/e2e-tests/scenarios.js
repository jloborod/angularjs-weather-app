describe('Weather App', function() {
  var cityNameInputText = element(by.tagName('input'));
  var submitButton = element(by.tagName('button'));
  var message = element(by.tagName('p'));
  var data = element(by.tagName('pre'));

  beforeEach(function () {
    browser.get('index.html');
  });

  it('should automatically redirect to /weather when location :cityName is null', function() {
    expect(browser.getCurrentUrl()).toMatch("/weather");
  });

  it('should show a message when no city was typed', function() {
    expect(message.getText()).toBeTruthy();
  });

  it('should go to /weather/:cityName when a cityName is typed and submit button is clicked', function() {
    cityNameInputText.sendKeys('London');
    submitButton.click();

    expect(browser.getCurrentUrl()).toMatch("/weather/London");
  });

  it('should provide weather data for the city typed', function() {
    cityNameInputText.sendKeys('London');
    submitButton.click();

    expect(data.getText()).toBeTruthy();
  });
});
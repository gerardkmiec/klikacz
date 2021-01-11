describe('clickmeeting polls autolicker', function () {
  it('should click a poll, if its presnt', async function () {
    browser.ignoreSynchronization = true;
    var until = protractor.ExpectedConditions;

    var pollOption = $('.form-check-radio-wrap');
    var sendButton = $('.survey-button');
    var summary = $('.summary-header');
    var mutefield = $('.audio-video-muted-overlay-info')

    await browser.get(browser.params.url);

    var winHandles = browser.getAllWindowHandles();
    winHandles.then(async function (handles) {
      var popUpWindow = handles[0];
      browser.switchTo().window(popUpWindow);

      await browser.wait(until.presenceOf(mutefield), 10000, 'Element not present').then(async function (present) {
        if (present) {
          await mutefield.click();
        };
      });
    });

    for (var i = 1; ; i++) {
      await browser.wait(until.presenceOf(pollOption), 28800000)
      await browser.sleep(1000)
      await pollOption.click()
      await browser.sleep(1000)
      await sendButton.click()
      await browser.sleep(1000)
      await expect(summary.getText()).toEqual('Dziękujemy za udział w ankiecie.');
      await console.log('Kliknięte ankiety: ' + i);
    };
  })
}); 


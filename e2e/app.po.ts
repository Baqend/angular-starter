import { browser, by, element } from 'protractor';

export class Angular4StarterPage {
  navigateTo() {
    return browser.get('/signup');
  }

  getFooterText() {
    return element(by.css('footer span')).getText();
  }
}

import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTranslateButton(language) {
    return element(by.buttonText(language));
  }

  clickButtonByName(name) {
    element(by.buttonText(name)).click();
  }

  getH3Text() {
    return element(by.tagName('h3')).getText();
  }

  getFormLegendText() {
    return element(by.tagName('legend')).getText();
  }
}

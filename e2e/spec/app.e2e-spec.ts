import {AppPage} from '../po/app.po';
import {browser} from 'protractor';

describe('angular-test-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.waitForAngularEnabled(false);
  });

  it('check translate button and text', () => {
    page.navigateTo();
    expect(page.getTranslateButton('RU')).toBeTruthy();
    page.clickButtonByName('RU');
    expect(page.getH3Text()).toEqual('Тут может быть текст на разных языках');
    page.clickButtonByName('EN');
    expect(page.getH3Text()).toEqual('There can be text in different languages');
  });

  it('check entities pages', () => {
    page.clickButtonByName('Student');
    expect(page.getFormLegendText()).toEqual('Create student entity');
    page.clickButtonByName('Teacher');
    expect(page.getFormLegendText()).toEqual('Create teacher entity');
    page.clickButtonByName('Car');
    expect(page.getFormLegendText()).toEqual('Create car entity');
  });
});

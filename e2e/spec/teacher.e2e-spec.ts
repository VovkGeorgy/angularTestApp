import {TeacherPage} from '../po/teacher.po';
import {browser, by, element} from 'protractor';

describe('angular-test-app App', () => {
  let teacherPage: TeacherPage;

  beforeEach(() => {
    teacherPage = new TeacherPage();
    browser.waitForAngularEnabled(false);
    teacherPage.navigateTo();
  });

  it('create and check entity ', () => {
    teacherPage.getFioImput().sendKeys('testing FIO');
    teacherPage.getExpImput().sendKeys('9992');
    teacherPage.getStudNumImput().sendKeys('9992');
    browser.sleep(3000);
    teacherPage.clickAddButton();
    teacherPage.clickReadTab();
    expect(teacherPage.getTestTeacher().getText()).toEqual('testing FIO');
  });

  it('check updating form', () => {
    teacherPage.clickUpdateTab();
    teacherPage.clickLastUpdateButton();
    expect(teacherPage.getUpdateForm()).toBeTruthy();
  });

  it('check delete buttons', () => {
    teacherPage.clickDeleteTab();
    browser.sleep(2000);
    expect(teacherPage.getLastFioInTable()).toEqual('testing FIO');
    browser.sleep(2000);
    teacherPage.clickLastDeleteButton();
    browser.sleep(2000);
    expect(teacherPage.getTestTeacher()).not.toEqual('testing FIO');
  });
});

import {browser, by, element} from 'protractor';

export class TeacherPage {
  navigateTo() {
    // return browser.get('/teachers');
    element(by.buttonText('Teacher')).click();
  }

  getFioImput() {
    return element(by.name('FIO'));
  }

  getExpImput() {
    return element(by.id('inputExperience'));
  }

  getStudNumImput() {
    return element(by.id('inputStudentsNumber'));
  }


  clickAddButton() {
    element(by.buttonText('Add')).click();
  }

  clickReadTab() {
    element(by.id('tab-selectbyid2')).click();
  }

  clickUpdateTab() {
    element(by.id('tab-selectbyid3')).click();
  }

  clickDeleteTab() {
    element(by.id('tab-selectbyid4')).click();
  }

  getTestTeacher() {
    return element(by.cssContainingText('td', 'testing FIO'));
  }

  getLastFioInTable() {
    return element.all(by.tagName('tr')).last().all(by.tagName('td')).first().getText();
  }

  clickLastUpdateButton() {
    element.all(by.buttonText('Update')).last().click();
  }

  clickLastDeleteButton() {
    element.all(by.buttonText('Delete')).last().click();
  }

  getUpdateForm() {
    return element(by.tagName('fieldset'));
  }
}

import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app wow!!!!!!!';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}

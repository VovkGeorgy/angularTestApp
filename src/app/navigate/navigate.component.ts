import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}

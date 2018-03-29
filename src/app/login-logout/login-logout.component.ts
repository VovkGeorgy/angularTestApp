import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.css']
})
export class LoginLogoutComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private dataservice: DataService) {
  }

  loginUrl = 'http://localhost:8090/login?username=vovk&password=11111&submit=Login';

  ngOnInit() {
  }

  logIn() {
    this.dataservice.loginRequest(this.loginUrl);
  }
}

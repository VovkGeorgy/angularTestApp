import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  }),
};

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
  }

  dataUrl = 'http://localhost:8090/student/getAllStudents';
  loginUrl = 'http://localhost:8090/login?username=vovk&password=11111&submit=Login';

  getData() {
    return this.http.get(this.dataUrl);
  }

  loginPage() {
    return this.http.post(this.loginUrl, httpOptions);
  }
}

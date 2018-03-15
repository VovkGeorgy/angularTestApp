import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Student} from './students/student';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
};

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
  }

  dataUrl = 'http://localhost:8090/student/getAllStudents';
  loginUrl = 'http://localhost:8090/login?username=vovk&password=11111&submit=Login';

  getData() {
    this.http.post(this.loginUrl, httpOptions);
    return this.http.get<Student>(this.dataUrl);
  }

}

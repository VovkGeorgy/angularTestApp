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

  loginUrl = 'http://localhost:8090/login?username=vovk&password=11111&submit=Login';

  getData(dataUrl) {
    return this.http.get(dataUrl);
  }

  loginPage() {
    return this.http.post(this.loginUrl, httpOptions);
  }

  addData(dataUrl, data){
    return this.http.post(dataUrl, JSON.stringify(data), httpOptions);
  }

  deleteData(dataUrl, data){
    return this.http.post(dataUrl, JSON.stringify(data), httpOptions);
  }
}

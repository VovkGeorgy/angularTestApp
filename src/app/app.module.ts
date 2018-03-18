import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {StudentsComponent} from './students/students.component';
import {NavigateComponent} from './navigate/navigate.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TeachersComponent} from './teachers/teachers.component';
import {DataService} from './data.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginLogoutComponent} from './login-logout/login-logout.component';
import {CarsComponent} from './cars/cars.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    NavigateComponent,
    NotFoundComponent,
    TeachersComponent,
    LoginLogoutComponent,
    CarsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'students', component: StudentsComponent},
      {path: 'teachers', component: TeachersComponent},
      {path: 'login', component: LoginLogoutComponent},
      {path: 'cars', component: CarsComponent},
      {path: '**', component: NotFoundComponent},
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// required for AOT (ahead of time) compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

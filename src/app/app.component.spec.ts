import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {StudentsComponent} from './students/students.component';
import {NavigateComponent} from './navigate/navigate.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {TeachersComponent} from './teachers/teachers.component';
import {LoginLogoutComponent} from './login-logout/login-logout.component';
import {CarsComponent} from './cars/cars.component';
import {HomeComponent} from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpLoaderFactory} from './app.module';
import {DataService} from './service/data.service';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
      providers: [
        DataService,
        TranslateService,
        {provide: APP_BASE_HREF, useValue: '/'},
      ],
    }).compileComponents();
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('AngularTestApp');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});

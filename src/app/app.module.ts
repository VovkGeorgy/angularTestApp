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
import { TeachersComponent } from './teachers/teachers.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    NavigateComponent,
    NotFoundComponent,
    TeachersComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: NavigateComponent},
      {path: 'students', component: StudentsComponent},
      {path: 'teachers', component: TeachersComponent},
      {path: '**', component: NotFoundComponent},
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

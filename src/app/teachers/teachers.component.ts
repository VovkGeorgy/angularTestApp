import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: FirebaseListObservable<any[]>;
  teacher: FormGroup = new FormGroup({
    fio: new FormControl(''),
    experience: new FormControl(''),
    studentsNumber: new FormControl(''),
    carId: new FormControl(''),
  });
  constructor(db: AngularFireDatabase) {
    this.teachers = db.list('/teachers');
  }

  ngOnInit() {
  }

  fieldChecker() {
    this.teachers.push(this.teacher.getRawValue());
    this.teacher.reset();

  }
}

import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: FirebaseListObservable<any[]>;
  student: FormGroup = new FormGroup({
    fio: new FormControl(''),
    workGroup: new FormControl(''),
    yearsOld: new FormControl(''),
    teacherId: new FormControl(''),
  });
  constructor(db: AngularFireDatabase) {
    this.students = db.list('/students');
  }

  ngOnInit() {
  }

  fieldChecker() {
    this.students.push(this.student.getRawValue());
    this.student.reset();

  }

}

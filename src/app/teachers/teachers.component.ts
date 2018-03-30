import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: FirebaseListObservable<any[]>;
  updateFieldIsHidden = true;
  tempTeacherKey: any;
  teacherForm: FormGroup = new FormGroup({
    fio: new FormControl(''),
    experience: new FormControl(''),
    studentsNumber: new FormControl(''),
  });

  constructor(private db: AngularFireDatabase) {
    this.teachers = db.list('/teachers');
    console.log(this.teachers.subscribe());
  }

  ngOnInit() {
  }

  fieldChecker() {
    this.teachers.push(this.teacherForm.getRawValue());
    this.teacherForm.reset();
  }

  deleteEntity(teacherKey: any) {
    this.db.object('/teachers/' + teacherKey)
      .remove();
  }

  updateEntity() {
    this.updateFieldIsHidden = true;
    this.db.object('/teachers/' + this.tempTeacherKey)
      .set(this.teacherForm.getRawValue());
  }

  loadUpdatedFields(teacher) {
    this.updateFieldIsHidden = false;
    this.teacherForm.setValue(teacher);
    this.tempTeacherKey = teacher.$key;
  }
}

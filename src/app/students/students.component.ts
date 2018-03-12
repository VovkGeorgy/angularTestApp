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
  updateFieldIsHidden = true;
  tempStudentKey: any;

  studentForm: FormGroup = new FormGroup({
    fio: new FormControl(''),
    workGroup: new FormControl(''),
    yearsOld: new FormControl(''),
    studentId: new FormControl(''),
  });

  constructor(private db: AngularFireDatabase) {
    this.students = db.list('/students');
  }

  ngOnInit() {
  }

  pushEntityToBase() {
    this.students.push(this.studentForm.getRawValue());
    this.studentForm.reset();
  }

  openUpdaterFields(student) {
    this.updateFieldIsHidden = false;
    this.studentForm.setValue(student);
    this.tempStudentKey = student.$key;
  }

  updateEntityInBase() {
    this.db.object('/students/' + this.tempStudentKey)
      .set(this.studentForm.getRawValue());
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DataService} from '../data.service';
import {Student} from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  updateFieldIsHidden = true;
  students: Student;
  tempStudentKey: any;
  studentForm: FormGroup = new FormGroup({
    fio: new FormControl(''),
    workGroup: new FormControl(''),
    yearsOld: new FormControl(''),
  });

  constructor(private dataService: DataService) {
    this.dataService.getData()
      .subscribe(data => this.students = {
        studentId: data['studentId'],
        fio: data['fio'],
        workGroup: data['workGroup'],
        yearsOld: data['yearsOld']
      })
    ;
  }

  ngOnInit() {
  }

  prop() {
  }

  // pushEntityToBase() {
  //   this.students.push(this.studentForm.getRawValue());
  //   this.studentForm.reset();
  // }
  //
  loadUpdatedFields(student) {
    this.updateFieldIsHidden = false;
    this.studentForm.setValue(student);
    this.tempStudentKey = student.$key;
  }
  //
  // updateEntityInBase() {
  //   this.db.object('/students/' + this.tempStudentKey)
  //     .set(this.studentForm.getRawValue());
  // }

  showData() {
    this.dataService.getData()
      .subscribe(data => this.students = {
        studentId: data['studentId'],
        fio: data['fio'],
        workGroup: data['workGroup'],
        yearsOld: data['yearsOld']
      })
    ;
  }
}

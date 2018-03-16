import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  updateFieldIsHidden = true;
  students: any[any];
  tempStudentKey: any;
  studentForm: FormGroup = new FormGroup({
    fio: new FormControl(''),
    workGroup: new FormControl(''),
    yearsOld: new FormControl(''),
  });

  constructor(private dataService: DataService) {
    console.log(this.dataService.getData());
    this.dataService.getData()
      .subscribe(students => {
        this.students = students;
      });
  }

  ngOnInit() {
  }

  prop() {
  }

  addEntityToBase() {
    this.students.push(this.studentForm.getRawValue());
    this.studentForm.reset();
  }

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

  // showData() {
  //   this.dataService.getData()
  //     .subscribe(data => this.students = {
  //       studentId: data['studentId'],
  //       fio: data['fio'],
  //       workGroup: data['workGroup'],
  //       yearsOld: data['yearsOld']
  //     })
  //   ;
  // }
}

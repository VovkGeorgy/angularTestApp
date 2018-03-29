import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  updateFieldIsHidden = true;
  students: any[any];
  tempStudentKey: any;
  studentForm: FormGroup = new FormGroup({
    studentId: new FormControl(''),
    fio: new FormControl(''),
    workGroup: new FormControl(''),
    yearsOld: new FormControl('')
  });
  getAllStudentsUrl = 'http://localhost:8090/student/getAllStudents';
  addStudentUrl = 'http://localhost:8090/student/addStudent';
  updateStudentUrl = 'http://localhost:8090/student/updateStudent';
  deleteStudentUrl = 'http://localhost:8090/student/deleteStudent';
  tempStudent: any;


  constructor(private dataService: DataService) {
  }

  addEntityToBase() {
    this.dataService.addData(this.addStudentUrl, this.studentForm.getRawValue())
      .subscribe(student => {
        this.tempStudent = student;
      });
    this.studentForm.reset();
  }

  loadUpdatedFields(student) {
    this.updateFieldIsHidden = false;
    this.studentForm.setValue(student);
    this.tempStudentKey = student.$key;
  }

  updateReadForm() {
    this.dataService.getData(this.getAllStudentsUrl)
      .subscribe(students => {
        this.students = students;
      });
  }

  addUpdatedEntityToBase() {
    this.dataService.addData(this.updateStudentUrl, this.studentForm.getRawValue())
      .subscribe(student => {
        this.tempStudent = student;
      });
    this.studentForm.reset();
  }

  deleteStudentInBase(student) {
    this.dataService.deleteData(this.deleteStudentUrl, student)
      .subscribe(data => {
        this.tempStudent = data;
      });
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

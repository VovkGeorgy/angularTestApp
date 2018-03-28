import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: FirebaseListObservable<any[]>;
  updateFieldIsHidden = true;
  tempCarKey: any;
  carForm: FormGroup = new FormGroup({
    mark: new FormControl(''),
    mileage: new FormControl(''),
    regNumber: new FormControl(''),
  });

  constructor(private db: AngularFireDatabase) {
    this.cars = db.list('/cars');
    console.log(this.cars.subscribe());
  }

  ngOnInit() {
  }

  fieldChecker() {
    this.cars.push(this.carForm.getRawValue());
    this.carForm.reset();
  }

  deleteEntity(carKey: any) {
    this.db.object('/cars/' + carKey)
      .remove();
  }

  updateEntity() {
    this.db.object('/cars/' + this.tempCarKey)
      .set(this.carForm.getRawValue());
  }

  loadUpdatedFields(car) {
    this.updateFieldIsHidden = false;
    this.carForm.setValue(car);
    this.tempCarKey = car.$key;
  }
}

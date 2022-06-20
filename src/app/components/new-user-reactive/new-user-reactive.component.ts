import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidations} from "../../classes/custom-validations";

@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.scss']
})
export class NewUserReactiveComponent implements OnInit {

  userForm: FormGroup;

  get name(): FormControl {
    return <FormControl>this.userForm.get('name');
  }

  get username(): FormControl {
    return <FormControl>this.userForm.get('username');
  }

  get hobbies(): FormArray {
    return <FormArray>this.userForm.get('hobbies');
  }

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('John Doe', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("John Doe")
      ]),
      username: new FormControl('johndoe', CustomValidations.unique /*CustomValidations.asyncUnique*/),
      email: new FormControl('john@doe.com'),
      address: new FormGroup({
        street: new FormControl('Main Street 11'),
        suite: new FormControl('Apt 111'),
        city: new FormControl('New City'),
        zipcode: new FormControl('111111'),
        geo: new FormGroup({
          lat: new FormControl('111'),
          lng: new FormControl('11')
        })
      }),
      phone: new FormControl('+11111111'),
      website: new FormControl('johndoe.com'),
      company: new FormGroup({
        companyName: new FormControl('Johns Doe'),
        catchPhrase: new FormControl('Get John Doe at Johns Doe'),
        companyBs: new FormControl('This is the business...')
      }),
      hobbies: new FormArray([])
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log("Form submitted!");
  }

  addHobby(): void {
    (<FormArray>this.userForm.get("hobbies")).push(new FormControl(""));
  }

  deleteHobby(index: number): void {
    (<FormArray>this.userForm.get("hobbies")).removeAt(index);
  }

  resetForm(): void {
    this.userForm.reset();
  }

}

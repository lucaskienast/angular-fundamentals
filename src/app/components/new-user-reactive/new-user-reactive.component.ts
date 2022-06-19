import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.scss']
})
export class NewUserReactiveComponent implements OnInit {

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('John Doe'),
      username: new FormControl('johndoe'),
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
      })
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log("Form submitted!");
  }

}

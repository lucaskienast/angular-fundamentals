import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  communicationModes: string[];
  genders: string[];

  constructor() {
    this.genders = ["male", "female", "other"];
    this.communicationModes = ["phone", "email"];
  }

  ngOnInit(): void {
  }

  submit(userForm: NgForm): void {
    console.log('Form submitted!');
    console.log(userForm);
  }

}

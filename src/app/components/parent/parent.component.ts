import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {IUser} from "../../interfaces/user";
import {Laptop} from "../../classes/laptop";
import {HookLogger, Readonly} from "../../decorators/class.decorator";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
@HookLogger({
  hooks: [
    'ngOnInit',
    'ngOnChanges'
  ]
})
export class ParentComponent implements OnInit {

  @Readonly('This is a readonly string and will not change') readonly: string = "";
  dateToday: string;
  users: IUser[];
  filterIdType: string = "";

  constructor(private userService: UserService) {
    this.dateToday = new Date().toDateString();
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
    let laptop: Laptop = new Laptop();
    console.log(laptop);
    console.log(this.readonly);
    this.readonly = "TEST2";
    console.log(this.readonly);
  }

  addUser(): void {
    this.userService.addUser({
      id: this.users.length + 2,
      name: "John Doe",
      username: "johnDoe",
      email: "john@doe.com",
      phone: "+4917562817963"
    });
  }

}

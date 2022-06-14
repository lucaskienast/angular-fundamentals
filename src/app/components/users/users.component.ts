import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<IUser> = [{
    "id": 0,
    "name": "",
    "username": "",
    "email": ""
  }];

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsersViaRest().subscribe(
      users => this.users = users,
      error => console.log("Error while fetching users: " + error)
    );
  }

}

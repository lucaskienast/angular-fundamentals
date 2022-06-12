import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../../interfaces/user";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow"
        })
      ),
      state(
        'closed',
        style({
          height: "100px",
          opacity: 0.5,
          backgroundColor: "green"
        })
      ),
      transition("open => closed", animate("1s")),
      transition("closed => open", animate("0.5s"))
    ])
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UserComponent implements OnInit {

  isOpen = true;

  user: IUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  };

  users: Array<IUser>;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();

    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
      this.user = this.users.filter((u: { id: number, name: string, username: string, email: string }) => {
        return Number(u['id']) === Number(params['id']);
      })[0];
      console.log(this.user);
    });

    this.activatedRoute.queryParams.subscribe((params) => console.log(params));
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

}

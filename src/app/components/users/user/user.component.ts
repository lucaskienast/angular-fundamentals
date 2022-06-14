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
    "id": 0,
    "name": "",
    "username": "",
    "email": ""
  };

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
    this.activatedRoute.params.subscribe((params) => {
      this.userService.getUserByIdViaRest(params['id']).subscribe(
        user => this.user =user
      );
    });

    this.activatedRoute.queryParams.subscribe((params) => console.log(params));
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

}

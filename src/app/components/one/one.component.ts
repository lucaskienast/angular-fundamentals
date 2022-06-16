import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  prop: string = "";
  subscription: Subscription;

  constructor(private userService: UserService) {
    this.subscription = this.userService.propChange.subscribe(
      prop => this.prop = prop,
      err => console.log("There was an error: ", err),
      () => alert("The observable is complete")
    );
  }

  ngOnInit(): void {
  }

  changeProp(): void {
    this.userService.setProp('bar');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

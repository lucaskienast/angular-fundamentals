import { Component, OnInit } from '@angular/core';
import {CanComponentDeactivate} from "../../guards/confirmation/confirmation.guard";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, CanComponentDeactivate {

  constructor() { }

  ngOnInit(): void {
  }

  confirm(): boolean {
    return confirm('Are you sure you want to navigate away?');
  }

}

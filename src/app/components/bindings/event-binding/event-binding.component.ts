import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  animal = 'dog';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    alert("Button was clicked");
  }

  onKeyUp(event: Event): void {
    console.log(event);
  }

}

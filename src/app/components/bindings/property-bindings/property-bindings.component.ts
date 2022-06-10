import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bindings',
  templateUrl: './property-bindings.component.html',
  styleUrls: ['./property-bindings.component.scss']
})
export class PropertyBindingsComponent implements OnInit {

  message = `Bound via property binding`;

  constructor() { }

  ngOnInit(): void {
  }

  getMessage(): string {
    console.log("getMessage() called!");
    return this.message;
  }

}

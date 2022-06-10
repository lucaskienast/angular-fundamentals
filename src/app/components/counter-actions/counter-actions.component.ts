import {Component, EventEmitter, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.scss']
})
export class CounterActionsComponent implements OnInit {

  @Output() counterChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleCounter(operation: string): void {
    console.log(operation);
    this.counterChange.emit(operation);
  }

}

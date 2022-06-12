import {Component, EventEmitter, Output, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.scss']
})
export class CounterActionsComponent implements OnInit {

  @Input() counter: number = Number();
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleCounter(operation: string): void {
    console.log(operation);
    operation === "INC" ? this.counter++ : this.counter--;
    this.counterChange.emit(this.counter);
  }

}

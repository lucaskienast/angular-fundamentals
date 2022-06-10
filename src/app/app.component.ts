import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-fundamentals';
  counter = 0;
  classToSet = 'positive';

  onCounterChange(buttonType: string): void {
    buttonType === "INC" ? this.counter++: this.counter--;
    this.classToSet = this.counter >= 0 ? 'positive' : 'negative';
  }
}

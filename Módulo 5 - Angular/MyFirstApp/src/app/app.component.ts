import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Bentroen';
  username: string = '';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  checkUsername() {
    return this.username === '';
  }

  resetUsername() {
    this.username = '';
  }

  onIntervalFired(firedNumber: number) {
    console.log('firedNumber ' + firedNumber);

    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}

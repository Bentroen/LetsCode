import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Bentroen';

  username: string = '';

  checkUsername() {
    return this.username === '';
  }

  resetUsername() {
    this.username = '';
  }
}

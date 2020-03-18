import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-call';
  searchValue: string;

  onEnterPressed(event: any) {
    this.searchValue = event.target.value;
  }
}

export enum KEY_CODE {
  ENTER = 13,
}

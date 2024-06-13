import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stepper-assignment';

  steps: {label: string}[] = [
    { label: 'Role'},
    { label: 'Email'},
    { label: 'Settings'}
  ];
}

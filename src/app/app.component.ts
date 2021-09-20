import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    // locking screen orientation to avoid landscape page layout disaster
    window.screen.orientation.lock('portrait');
  }
}

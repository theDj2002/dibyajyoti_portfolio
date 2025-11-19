import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
      (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
      this.isMobileDevice = true;
    }
  }

  title = 'frontend-leitor';

  isMobileDevice: boolean = false;

}

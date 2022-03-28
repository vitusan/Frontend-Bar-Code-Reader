import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leitor-page',
  templateUrl: './leitor-page.component.html',
  styleUrls: ['./leitor-page.component.css']
})
export class LeitorPageComponent implements OnInit {

  isMobileDevice = false;

  constructor() { }

  ngOnInit(): void {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
      (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
      this.isMobileDevice = true;
    }
  }

}

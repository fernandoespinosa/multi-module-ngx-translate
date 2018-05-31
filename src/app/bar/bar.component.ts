import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor(translateService: TranslateService) {
    translateService.use('en-US');
  }

  ngOnInit() {
  }

}

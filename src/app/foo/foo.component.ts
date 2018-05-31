import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor(translateService: TranslateService) {
    translateService.use('en-US');
  }

  ngOnInit() {
  }

}

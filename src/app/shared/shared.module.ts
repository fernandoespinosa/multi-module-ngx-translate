import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@Injectable()
export class SharedTranslateHttpLoader extends TranslateHttpLoader {
  constructor(http: HttpClient) {
    super(http, '/assets/', '.json');
    console.log('TranslateHttpLoaderFactory@common');
  }
}

@NgModule({
  providers: [SharedTranslateHttpLoader]
})
export class SharedModule {
}

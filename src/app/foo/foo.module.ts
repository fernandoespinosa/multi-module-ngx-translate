import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [FooComponent],
  exports: [FooComponent]
})
export class FooModule { }

export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/foo-', '.json');
}

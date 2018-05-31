import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  declarations: [BarComponent],
  exports: [BarComponent]
})
export class BarModule { }

export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/bar-', '.json');
}

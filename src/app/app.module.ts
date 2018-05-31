import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooModule } from './foo/foo.module';
import { BarModule } from './bar/bar.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule, SharedTranslateHttpLoader } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FooModule,
    BarModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: SharedTranslateHttpLoader
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

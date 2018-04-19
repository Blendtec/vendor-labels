import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppConfig, APP_CONFIG } from './config';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppConfigModule } from './config';
import { NgPipesModule } from 'ngx-pipes';
import { NgxBarcodeModule } from 'ngx-barcode';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient, config: AppConfig) {
  return new TranslateHttpLoader(http, `${config.assets}/i18n/`, '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppConfigModule,
    BrowserModule,
    HttpClientModule,
    NgPipesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBarcodeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient, APP_CONFIG]
      }
    })
  ],
  providers: [
    TranslatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

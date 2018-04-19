import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppConfig } from './models/app-config.interface';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');


export const APP_DI_CONFIG: AppConfig = {
  bucket: environment.bucket,
  assets: environment.assets
};

@NgModule({
  providers: [
    {provide: APP_CONFIG, useValue: APP_DI_CONFIG}
    ]
})
export class AppConfigModule { }

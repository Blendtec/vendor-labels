import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/observable/of';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from './config';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxBarcodeModule } from 'ngx-barcode';


describe('AppComponent', () => {

  let translateSrvc: TranslateService;
  beforeEach(async(() => {

    translateSrvc = jasmine.createSpyObj('TranslateService', ['setDefaultLang', 'use']);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        TranslateModule,
        HttpClientModule,
        NgxBarcodeModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: APP_CONFIG, useValue: {}},
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: TranslateService, useValue: translateSrvc },
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have no title`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toBeUndefined();
  }));

});

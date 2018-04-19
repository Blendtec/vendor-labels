import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnDestroy {

  public form: FormGroup;
  public formSubmitted: boolean = false;
  public vendorLabel: any;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private formBuilder: FormBuilder, translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.form = this.formBuilder.group({
      vendorName: ['', [Validators.required]],
      poNumber: ['', [Validators.required]],
      itemNumber: ['', [Validators.required]],
      quantity: ['', [Validators.min(0), Validators.max(9999999), Validators.required]],
      uom: ['', [Validators.required]],
      configuration: ['', [Validators.maxLength(2), Validators.required]],
    });
  }

  public onSubmit(form: FormGroup): void {
   console.log('SUBMITTED form', form);
   console.log('LABEL', form.value);
    this.vendorLabel = form.value;
    this.formSubmitted = true;
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}

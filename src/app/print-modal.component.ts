import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-print-modal',
  templateUrl: './print-modal.component.html',
  styleUrls: ['./print-modal.component.css']
})
export class PrintComponent {

  @Input()
  public label: any;
  public showing: Boolean = false;

  public show(): void {
    this.showing = true;
  }

  public hide(): void {
    this.showing = false;
  }

}

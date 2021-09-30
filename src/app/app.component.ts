import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public scannerEnabled: boolean = true;
  public formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];
  constructor() {}

  ngOnInit() {}

  public scanSuccessHandler(event: any) {
    console.log('event', event);
    this.scannerEnabled = !this.scannerEnabled;
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
  }
}

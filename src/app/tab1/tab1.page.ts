import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  signaturePad: SignaturePad;
  firmaImg = true;
  firma = '../../../assets/img/signature.png';

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('canvas') canvasEl: ElementRef;

  signatureImg: string;


  constructor() { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    // console.log('El event', event);
    // funciona en el dispositivo, no en el navegador

  }

  moved(event: Event) {
    // funciona en el dispositivo, no en el navegador
    // console.log('Evetnt Moved: ', event);
  }

  clearPad() {
    this.signaturePad.clear();
    this.firmaImg = false;
  }

  savePad() {
    console.log('Me estas tocando');
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
    console.log('input file', this.inputFile);
  }

  inputFile( e ) {
    console.log('input file', e);
  }

}

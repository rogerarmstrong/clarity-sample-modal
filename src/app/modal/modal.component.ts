import { Component, OnInit, Input, ViewChildren, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() btnText = 'OK!';

  @ViewChild("input_1") input_1;

  show = false;
  msg = '';

  open(msg: string) {
    this.show = true;
    this.msg = msg;

    setTimeout(() => { // workaround for lack of dom ready event
      this.input_1.nativeElement.focus();
    }, 0.1);

  }

  close() {
    this.show = false;
  }

}

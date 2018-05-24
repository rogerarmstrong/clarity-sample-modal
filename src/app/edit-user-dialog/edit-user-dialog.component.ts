import { Component, OnInit, Input, ViewChildren, ViewChild, AfterViewInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { User } from '../user';
import { AutofocusDirective } from '../autofocus.directive';

@Component({
  selector: 'edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent {
  @ViewChild(AutofocusDirective) autofocus: AutofocusDirective;
  @Output() onOK: EventEmitter<User> = new EventEmitter<User>();

  show = false;

  user: User;

  open(user: User) {
    this.show = true;
    this.user = Object.create(user); // clone the user (we don't want to modify the original in the dialog)

    setTimeout(() => {
      if (this.autofocus) {
        this.autofocus.setFocus();
      }
    }, 0.1);
  }

  close() {
    this.show = false;
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.onOK.emit(this.user);
    }
  }

  onSubmit() {
    this.onOK.emit(this.user);
  }

}

/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { User } from "../user";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
    @ViewChild(EditUserDialogComponent) modal: EditUserDialogComponent;

    user: User = { firstName: "Joe", lastName: "Smith" };

    ngAfterViewInit(): void {
        this.modal.onOK.subscribe(user => {
            this.user = user;
            this.modal.close();
        });
    }
}

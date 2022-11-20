import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from "./login/login.component";
import {EmployeeListComponent} from './employeeList/employee-list.component'

@NgModule({
    imports: [
        NgbModule,
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: LoginComponent},
            {path: 'employee-list', component: EmployeeListComponent},
        ]),
        FormsModule
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        LoginComponent,
        EmployeeListComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

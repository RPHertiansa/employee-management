import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    products = products;
    email: string = '';
    password: string = '';
    errorLogin: boolean = false

    constructor(private router: Router) {
    }

    login() {
        if (this.email !== '' && this.password !== '') {
            this.router.navigate(['employee-list']);
        } else {
            this.errorLogin = true
        }
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

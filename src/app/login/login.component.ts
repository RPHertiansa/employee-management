import {Component} from '@angular/core';

import {products} from '../products';

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


    login() {
        if (this.email !== '' && this.password !== '') {
            console.log('RES', this.email, this.password)
            // navigate
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

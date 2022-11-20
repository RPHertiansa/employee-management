import {Component} from '@angular/core';

import {employees, Employee} from '../employees';


@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent {
    page = 1;
    pageSize = 5;
    collectionSize = employees.length;
    employees: Employee[] = [];

    constructor() {
        this.fetchEmployees();
    }

    fetchEmployees() {
        this.employees = employees.map((employee, i) => ({...employee})).slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize,
        );
    }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

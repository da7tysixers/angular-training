import { Component, Directive, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of salesperson object
  salesPersonList: SalesPerson[] = [
     new SalesPerson("Anup", "Kumar", "anup.kumar@gmail.com", 5000),
     new SalesPerson("Johnson", "smith", "johnson.smith@gmail.com", 4000),
     new SalesPerson("John", "Doe", "john.doe@gmail.com", 90000),
     new SalesPerson("Claire", "Murphy", "claire.murphy@gmail.com", 60000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

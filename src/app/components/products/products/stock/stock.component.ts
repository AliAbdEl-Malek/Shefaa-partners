import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  products : [{}] = [{'name':"mahmoud",'age':23,'gender':"male"}];
  constructor() { }

  ngOnInit(): void {
  }

}

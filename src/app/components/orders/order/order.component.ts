import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products : [{}] = [{'name':"mahmoud",'age':23,'gender':"male"}];
  constructor() { }

  ngOnInit(): void {
   
    
  }

}

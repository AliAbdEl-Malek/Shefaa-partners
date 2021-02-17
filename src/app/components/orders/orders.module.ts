import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PreviousOrdersComponent } from './previous-orders/previous-orders.component';


const routes :Routes = [
  {path:'', component:OrderComponent},
  {path:'previous', component:PreviousOrdersComponent}

 
]

@NgModule({
  declarations: [OrderComponent, PreviousOrdersComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), FormsModule,SharedModule
  ]
})
export class OrdersModule { }

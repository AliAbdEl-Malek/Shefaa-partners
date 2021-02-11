import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes :Routes = [
  {path:'order', component:OrderComponent}
 
]

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), FormsModule
  ]
})
export class OrdersModule { }

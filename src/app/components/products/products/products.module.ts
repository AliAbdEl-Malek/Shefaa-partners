import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { IndexComponent } from './index/index.component';
import { StockComponent } from './stock/stock.component';
import { FormsModule } from '@angular/forms';



const routes :Routes = [
  {path:'pro', component:ProductComponent},
  {path:'stock', component:StockComponent},
  {path:'', component:IndexComponent},

  
  
]

@NgModule({
  declarations: [ProductComponent, IndexComponent, StockComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), FormsModule
  ]
})
export class ProductsModule { }

import { ProductsModule } from './components/products/products/products.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('../app/components/products/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('../app/components/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'registeration',
    loadChildren: () => import('../app/components/registeration/registeration.module').then(m => m.RegisterationModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/components/orders/orders.module').then(m => m.OrdersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

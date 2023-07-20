import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { MenuComponent } from './menu/menu.component';
import { ProductDetailComponent } from './menu/product-detail/product-detail.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'products-list', component: ProductsListComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'cart', component: CartComponent },
      { path: 'cart/checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
      { path: 'menu/product/:productId', component: ProductDetailComponent },
      { path: 'order', component: OrderComponent, canActivate: [AuthGuard]},
      { path: 'order/detail/:orderId', component: OrderDetailsComponent, canActivate: [AuthGuard] },
      // { path: '**', component: HomeComponent },
      // { path: '**', component: PageNotFoundComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

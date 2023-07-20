import { NgModule } from '@angular/core';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './menu/product-detail/product-detail.component';
import { ServicesModule } from 'src/app/services/services.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { OrderComponent } from './order/order.component';




import { NgxPaginationModule } from 'ngx-pagination';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { TeamComponent } from './home/team/team.component';
import { FeedbackComponent } from './home/feedback/feedback.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ClientLayoutComponent,

    HomeComponent,
    MenuComponent,
    ProductsListComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    OrderComponent,
    OrderDetailsComponent,
    AboutComponent,
    TeamComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    NgxPaginationModule,

    MaterialModule,

    ServicesModule
  ],
})
export class ClientModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductComponent } from './product/new-product/new-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ApiImgPipe } from 'src/app/services/api-img.pipe';
import { ServicesModule } from 'src/app/services/services.module';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { NewStockComponent } from './stock/new-stock/new-stock.component';
import { NewCategoryComponent } from './category/new-category/new-category.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { HomeComponent } from './home/home.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProductsStocksComponent } from './home/charts/products-stocks/products-stocks.component';
import { PriceCategoryDateComponent } from './home/charts/price-category-date/price-category-date.component';
import { CategoryNproductsComponent } from './home/charts/category-nproducts/category-nproducts.component';



@NgModule({
  declarations: [
    AdminComponent,
    NewProductComponent,
    ProductListComponent,
    EditProductComponent,
    StockListComponent,
    NewStockComponent,
    NewCategoryComponent,
    NewUserComponent,
    UserListComponent,
    EditUserComponent,
    CategoryListComponent,
    OrderListComponent,
    OrderDetailsComponent,
    HomeComponent,
    ProductsStocksComponent,
    PriceCategoryDateComponent,
    CategoryNproductsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule,

    MaterialModule,
    NgxChartsModule
  ]
})
export class AdminModule { }

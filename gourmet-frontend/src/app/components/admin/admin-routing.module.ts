import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { NewProductComponent } from "./product/new-product/new-product.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { EditProductComponent } from "./product/edit-product/edit-product.component";
import { StockListComponent } from "./stock/stock-list/stock-list.component";
import { NewStockComponent } from "./stock/new-stock/new-stock.component";
import { NewCategoryComponent } from "./category/new-category/new-category.component";
import { CategoryListComponent } from "./category/category-list/category-list.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { NewUserComponent } from "./user/new-user/new-user.component";
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { OrderListComponent } from "./order/order-list/order-list.component";
import { OrderDetailsComponent } from "./order/order-details/order-details.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'category', component: CategoryListComponent },
      { path: 'category/new', component: NewCategoryComponent },
      { path: 'product', component: ProductListComponent },
      { path: 'product/new', component: NewProductComponent },
      { path: 'product/:id', component: EditProductComponent },
      { path: 'product/:id/stock', component: StockListComponent },
      { path: 'product/:id/stock/new', component: NewStockComponent },
      { path: 'user', component: UserListComponent },
      { path: 'user/new', component: NewUserComponent },
      { path: 'user/:id', component: EditUserComponent },
      { path: 'order', component: OrderListComponent },
      { path: 'order/:id', component: OrderDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

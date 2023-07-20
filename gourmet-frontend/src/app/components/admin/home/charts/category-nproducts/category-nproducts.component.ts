import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category-nproducts',
  templateUrl: './category-nproducts.component.html',
  styleUrls: ['./category-nproducts.component.css']
})
export class CategoryNproductsComponent implements OnInit {

  single: any[] = [];

  constructor(
    private productsService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.productsService.getProduct().subscribe((productos) => {
      const data = this.transformarDatos(productos);
      this.single = [...data];
    });
  }


  transformarDatos(productos: any[]): any[] {
    const categorias: any = {};

    productos.forEach((producto) => {
      const categoria = producto.category.name;

      if (categorias[categoria]) {
        categorias[categoria]++;
      } else {
        categorias[categoria] = 1;
      }
    });

    return Object.keys(categorias).map((categoria) => {
      return { name: categoria, value: categorias[categoria] };
    });
  }


}

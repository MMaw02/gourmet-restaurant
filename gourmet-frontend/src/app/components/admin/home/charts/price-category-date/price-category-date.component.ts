import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../../services/order.service';
import { Order } from 'src/app/interfaces/order.interface';

@Component({
  selector: 'app-price-category-date',
  templateUrl: './price-category-date.component.html',
  styleUrls: ['./price-category-date.component.css']
})
export class PriceCategoryDateComponent implements OnInit {

  single: any[] = [];

  constructor(
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => {
      const data = this.transformarDatos(orders);
      this.single = [...data];
    });
  }


  // transformarDatos(orders: Order[]): Order[] {
  //   const data: any[] = [];
  //   const meses: any = {};

  //   orders.forEach((order) => {
  //     const createdAt = new Date(order.createdAt!);
  //     const mes = createdAt.getMonth() + 1; // Se suma 1 porque los meses se indexan desde 0
  //     console.log(mes);


  //     let totalOrden = 0;
  //     order.orderProducts.forEach(op => {
  //       totalOrden += op.quantity * op.product.price;
  //     });

  //     if (meses[mes]) {
  //       console.log(meses[mes]);
  //       meses[mes] += totalOrden;
  //     } else {
  //       meses[mes] = totalOrden;
  //     }
  //   });

  //   Object.keys(meses).forEach((mes) => {
  //     data.push({ name: `Mes ${mes}`, value: meses[mes] });
  //   });

  //   return data;
  // }

  // transformarDatos(orders: Order[]): Order[] {
  //   const data: any[] = [];
  //   const categorias: any = {};

  //   orders.forEach((order) => {
  //     order.orderProducts.forEach((op) => {
  //       const categoria = op.product.category.name;
  //       const totalOrden = op.quantity * op.product.price;

  //       if (categorias[categoria]) {
  //         categorias[categoria] += totalOrden;
  //       } else {
  //         categorias[categoria] = totalOrden;
  //       }
  //     });
  //   });

  //   Object.keys(categorias).map((categoria) => {
  //     data.push({ name: categoria, value: categorias[categoria] });
  //   });

  //   return data;
  // }

  transformarDatos(orders: Order[]): Order[] {
    const categorias: any = {};
    const meses: any = {};

    orders.forEach((order) => {
      const createdAt = new Date(order.createdAt!);
      const mes = this.obtenerNombreMes(createdAt.getMonth());
      const year = createdAt.getFullYear();

      if (!meses[mes]) {
        meses[mes] = {};
      }

      order.orderProducts.forEach((orderProduct) => {
        const categoria = orderProduct.product.category.name;
        const totalOrden = orderProduct.quantity * orderProduct.product.price;

        if (!categorias[categoria]) {
          categorias[categoria] = {};
        }

        if (!categorias[categoria][mes]) {
          categorias[categoria][mes] = 0;
        }

        categorias[categoria][mes] += totalOrden;
      });
    });

    const data: any[] = [];

    Object.keys(categorias).forEach((categoria) => {
      const values: any[] = [];

      Object.keys(meses).forEach((mes) => {
        const total = categorias[categoria][mes] || 0;
        values.push({ name: new Date(`${mes} ${meses[mes]}, 2023`), value: total });
      });

      data.push({ name: categoria, series: values });
    });

    return data;
  }

  obtenerNombreMes(numeroMes: number): string {
    const meses = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ];

    return meses[numeroMes];
  }
}

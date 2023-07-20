import { Component, OnInit } from '@angular/core';
import { StockService } from '../../../../services/stock.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css']
})
export class NewStockComponent implements OnInit{

  productId?: number;
  form: FormGroup = this.fb.group({
    unitIn: [, [Validators.required, Validators.min(1), Validators.max(100)]]
  })

  constructor(
    private fb: FormBuilder,
    private stockService: StockService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
  }

  create(): void {
    this.stockService.createStock(this.productId!, this.form.value).subscribe({
      next: () => this.router.navigate(['/admin/product/' + this.productId + '/stock'])
    });
  }
}

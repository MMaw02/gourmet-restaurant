import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../../services/products.service';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from '../../../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  categories: Category[] = [];
  // objecto: Object = {};

  form: FormGroup = this.fb.group({
    code: [, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    name: [, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    description: [,[Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
    price: [, [Validators.required, Validators.min(0)]],
    category: [, [Validators.required]],
    image: [, [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productsService: ProductsService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(c => {
      this.categories = c;
    });
  }


  create(): void {
    this.form.value.category = JSON.parse(this.form.value.category);
    this.productsService.create(this.form.value).subscribe(products => {
      this.router.navigate(['/admin/product'])
    })
  }

  uploadFile(event: any) {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      this.productsService.uploadFile(formData).subscribe(
        response => this.form!.controls['image'].setValue(response.path)
      )
    }
  }
}

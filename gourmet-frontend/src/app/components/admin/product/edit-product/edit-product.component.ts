import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  form?: FormGroup;
  productId?: number;
  categories?: Category[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(c => {
      this.categories = c;
    });

    this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);

    this.productsService.getById(this.productId).subscribe(
      product => {
        this.form = this.fb.group({
          code: [product.code, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
          name: [product.name, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
          description: [product.description,[Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
          price: [product.price, [Validators.required, Validators.min(0)]],
          category: [product.category, [Validators.required]],
          image: [product.image, [Validators.required]]
        })
      }
    );
  }

  uploadFile(event: any) {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      this.productsService.uploadFile(formData)
        .subscribe(response => {
          this.form!.controls['image'].setValue(response.path);
        })
    }
  }

  update() {
    this.form!.value.category = JSON.parse(this.form!.value.category);
    this.productsService.update(this.productId!, this.form!.value).subscribe({
      next: () => {
        this.router.navigate(['/admin/product']);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.maxLength(50)]],
    description: [, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]]
  })

  ngOnInit(): void {

  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private categoryService: CategoryService,
  ) {}

  create() {
    this.categoryService.create(this.form.value).subscribe({
      next: () => this.router.navigate(['/admin/product'])
    })
  }

}

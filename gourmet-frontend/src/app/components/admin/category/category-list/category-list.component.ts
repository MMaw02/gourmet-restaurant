import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }


  getCategory() {
    this.categoryService.getCategory().subscribe(c => {
      this.categories = c;
    })
  }

  delete(category: Category) {
    if (confirm('¿Estás seguro de eliminar esta categoria?')) {
      this.categoryService.delete(category.id).subscribe(
        () => {
          this.getCategory();
        }
      );
    }
  }
}

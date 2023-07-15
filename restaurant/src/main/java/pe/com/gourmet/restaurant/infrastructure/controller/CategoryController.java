package pe.com.gourmet.restaurant.infrastructure.controller;

import org.springframework.web.bind.annotation.*;
import pe.com.gourmet.restaurant.application.services.CategoryService;
import pe.com.gourmet.restaurant.domain.Category;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public List<Category> getUsers() {
        return categoryService.getCategories();
    }

    @GetMapping("/{id}")
    public Category getUserById(@PathVariable Long id) {
        return categoryService.findById(id);
    }

    @PostMapping("/admin")
    public Category create(@RequestBody Category category) {
        return categoryService.create(category);
    }

    @DeleteMapping("/admin/{id}")
    public void delete(@PathVariable Long id) {
        categoryService.deleteById(id);
    }
}

package pe.com.gourmet.restaurant.application.services;

import pe.com.gourmet.restaurant.application.repository.CategoryRepository;
import pe.com.gourmet.restaurant.domain.Category;

import java.util.List;

public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public Category findById(Long id) {
        return categoryRepository.findById(id);
    }

    public List<Category> getCategories() {
        return categoryRepository.getCategories();
    }

    public Category create(Category category) {
        return categoryRepository.create(category);
    }

    public void deleteById(Long id) {
        categoryRepository.deleteById(id);
    }
}

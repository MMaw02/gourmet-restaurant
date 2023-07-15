package pe.com.gourmet.restaurant.application.repository;

import pe.com.gourmet.restaurant.domain.Category;
import pe.com.gourmet.restaurant.domain.Product;

import java.util.List;

public interface CategoryRepository {
    Category findById(Long id);
    List<Category> getCategories();
    Category create(Category category);
    void deleteById(Long id);
}

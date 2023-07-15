package pe.com.gourmet.restaurant.infrastructure.adapter;

import org.springframework.stereotype.Repository;
import pe.com.gourmet.restaurant.application.repository.CategoryRepository;
import pe.com.gourmet.restaurant.domain.Category;
import pe.com.gourmet.restaurant.infrastructure.adapter.dao.CategoryJpaRepository;
import pe.com.gourmet.restaurant.infrastructure.entity.CategoryEntity;
import pe.com.gourmet.restaurant.infrastructure.mapper.CategoryMapper;

import java.util.List;

@Repository
public class CategoryRepositoryImpl implements CategoryRepository {

    private final CategoryJpaRepository categoryJpaRepository;
    private final CategoryMapper categoryMapper;

    public CategoryRepositoryImpl(CategoryJpaRepository categoryJpaRepository, CategoryMapper categoryMapper) {
        this.categoryJpaRepository = categoryJpaRepository;
        this.categoryMapper = categoryMapper;
    }

    @Override
    public Category findById(Long id) {
        CategoryEntity categoryEntity = categoryJpaRepository.findById(id).orElse(null);
        return categoryMapper.categoryEntityToCategory(categoryEntity);
    }

    @Override
    public List<Category> getCategories() {
        List<CategoryEntity> categoryEntities = categoryJpaRepository.findAll();
        return categoryMapper.categoryEntitiesToCategories(categoryEntities);
    }

    @Override
    public Category create(Category category) {
        CategoryEntity categoryEntity = categoryJpaRepository.save(categoryMapper.categoryToCategoryEntity(category));
        return categoryMapper.categoryEntityToCategory(categoryEntity);
    }


    @Override
    public void deleteById(Long id) {
        categoryJpaRepository.deleteById(id);
    }
}

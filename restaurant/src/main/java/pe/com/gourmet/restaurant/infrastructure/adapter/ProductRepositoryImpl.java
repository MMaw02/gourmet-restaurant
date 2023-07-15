package pe.com.gourmet.restaurant.infrastructure.adapter;

import org.springframework.stereotype.Repository;
import pe.com.gourmet.restaurant.application.repository.CategoryRepository;
import pe.com.gourmet.restaurant.application.repository.ProductRepository;
import pe.com.gourmet.restaurant.domain.Category;
import pe.com.gourmet.restaurant.domain.Product;
import pe.com.gourmet.restaurant.infrastructure.adapter.dao.CategoryJpaRepository;
import pe.com.gourmet.restaurant.infrastructure.adapter.dao.ProductJpaRepository;
import pe.com.gourmet.restaurant.infrastructure.entity.CategoryEntity;
import pe.com.gourmet.restaurant.infrastructure.entity.ProductEntity;
import pe.com.gourmet.restaurant.infrastructure.mapper.CategoryMapper;
import pe.com.gourmet.restaurant.infrastructure.mapper.ProductMapper;

import java.util.List;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

    private final ProductJpaRepository productJpaRepository;
    private final CategoryJpaRepository categoryJpaRepository;
    private final ProductMapper productMapper;
    private final CategoryMapper categoryMapper;

    public ProductRepositoryImpl(ProductJpaRepository productJpaRepository, CategoryJpaRepository categoryJpaRepository, ProductMapper productMapper, CategoryMapper categoryMapper) {
        this.productJpaRepository = productJpaRepository;
        this.categoryJpaRepository = categoryJpaRepository;
        this.productMapper = productMapper;
        this.categoryMapper = categoryMapper;
    }

    @Override
    public List<Product> getFirst6Products() {
        List<ProductEntity> productEntities = productJpaRepository.findTop6ByOrderByCreatedAtDesc();
        return productMapper.productsEntityToProducts(productEntities);
    }

    @Override
    public List<Product> getProducts() {
        List<ProductEntity> productEntities = productJpaRepository.findAll();
        return productMapper.productsEntityToProducts(productEntities);
    }

    @Override
    public Product findById(Long id) {
        ProductEntity productEntity = productJpaRepository.findById(id).orElse(null);
        return productMapper.ProductEntityToProduct(productEntity);
    }

    @Override
    public Product create(Product product) {
//        CategoryEntity categoryEntity = categoryJpaRepository.findById(idCategory).orElse(null);
//        product.setCategory(categoryMapper.categoryEntityToCategory(categoryEntity));
        ProductEntity productEntity = productJpaRepository.save(productMapper.productToProductEntity(product));
        return productMapper.ProductEntityToProduct(productEntity);
    }

    @Override
    public Product update(Long id, Product product) {
        ProductEntity productEntity = productJpaRepository.findById(id).orElse(null);

        productEntity.setName(product.getName());
        productEntity.setCode(product.getCode());
        productEntity.setDescription(product.getDescription());
        productEntity.setPrice(product.getPrice());
        productEntity.setImage(product.getImage());
        productEntity.setCategory(categoryMapper.categoryToCategoryEntity(product.getCategory()));

        ProductEntity productEntitySaved = productJpaRepository.save(productEntity);

        return productMapper.ProductEntityToProduct(productEntitySaved);
    }

    @Override
    public void deleteById(Long id) {
        productJpaRepository.deleteById(id);
    }

    @Override
    public List<Product> findByName(String name) {
        List<ProductEntity> productEntities = productJpaRepository.findByNameContainingIgnoreCase(name);
        return productMapper.productsEntityToProducts(productEntities);
    }

    @Override
    public List<Product> getProductsByCategory(Long idCategory) {
        CategoryEntity categoryEntity = categoryJpaRepository.findById(idCategory).orElse(null);
        List<ProductEntity> productEntities = productJpaRepository.findByCategory(categoryEntity);

        return productMapper.productsEntityToProducts(productEntities);
    }
}

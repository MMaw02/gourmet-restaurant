package pe.com.gourmet.restaurant.application.services;

import pe.com.gourmet.restaurant.application.repository.ProductRepository;
import pe.com.gourmet.restaurant.domain.Product;

import java.util.List;

public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getFirst6Products() {
        return productRepository.getFirst6Products();
    }

    public List<Product> getProducts() {
        return productRepository.getProducts();
    }

    public Product findById(Long id) {
        return productRepository.findById(id);
    }

    public Product create(Product product) {
        return productRepository.create(product);
    }

    public Product update(Long id, Product product) {
        return productRepository.update(id, product);
    }

    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }

    public List<Product> findByName(String term) {
        return productRepository.findByName(term);
    }

    public List<Product> getProductsByCategory(Long idCategory) {
        return productRepository.getProductsByCategory(idCategory);
    }

}

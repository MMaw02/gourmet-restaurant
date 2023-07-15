package pe.com.gourmet.restaurant.application.repository;

import pe.com.gourmet.restaurant.domain.Category;
import pe.com.gourmet.restaurant.domain.Product;
import pe.com.gourmet.restaurant.domain.User;

import java.util.List;

public interface ProductRepository {

    List<Product> getFirst6Products();
    List<Product> getProducts();
    Product findById(Long id);
    Product create(Product product);
    Product update(Long id, Product product);
    void deleteById(Long id);

    List<Product> findByName(String name);

//    Prueba o Temporal
    List<Product> getProductsByCategory(Long idCategory);
}

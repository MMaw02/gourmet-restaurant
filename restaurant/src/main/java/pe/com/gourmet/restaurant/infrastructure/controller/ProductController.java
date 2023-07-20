package pe.com.gourmet.restaurant.infrastructure.controller;

import org.springframework.web.bind.annotation.*;
import pe.com.gourmet.restaurant.application.services.ProductService;
import pe.com.gourmet.restaurant.domain.Product;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin(originPatterns = "*")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/last-products")
    public List<Product> getFirst6Products() {
        return productService.getFirst6Products();
    }

    @GetMapping
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("/{id}")
    public Product getUserById(@PathVariable Long id) {
        return productService.findById(id);
    }

    @PostMapping("/admin")
    public Product create(@RequestBody Product product) {
        return productService.create(product);
    }

    @PutMapping("/admin/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product product) {
        return productService.update(id, product);
    }

    @DeleteMapping("/admin/{id}")
    public void delete(@PathVariable Long id) {
        productService.deleteById(id);
    }

    @GetMapping("/search")
    public List<Product> findByName(@RequestParam String name) {
        return productService.findByName(name);
    }

    @GetMapping("/category/{idCategory}")
    public List<Product> getProductsByCategory(@PathVariable Long idCategory) {
        return productService.getProductsByCategory(idCategory);
    }
}

package pe.com.gourmet.restaurant.infrastructure.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pe.com.gourmet.restaurant.application.repository.*;
import pe.com.gourmet.restaurant.application.services.*;

@Configuration
public class BeanConfiguration {

    @Bean
    public UserService userService(UserRepository userRepository) {
        return new UserService(userRepository);
    }

    @Bean
    public CategoryService categoryService(CategoryRepository categoryRepository) {
        return new CategoryService(categoryRepository);
    }

    @Bean
    public ProductService productService(ProductRepository productRepository) {
        return new ProductService(productRepository);
    }

    @Bean
    public StockService stockService(StockRepository stockRepository) {
        return new StockService(stockRepository);
    }

    @Bean
    public ValidateStock validateStock(StockService stockService) {
        return new ValidateStock(stockService);
    }

    @Bean
    public OrderService orderService(OrderRepository orderRepository) {
        return new OrderService(orderRepository);
    }

//    @Bean
//    public OrderProductService orderProductService(OrderProductRepository orderProductRepository) {
//        return new OrderProductService(orderProductRepository);
//    }
}

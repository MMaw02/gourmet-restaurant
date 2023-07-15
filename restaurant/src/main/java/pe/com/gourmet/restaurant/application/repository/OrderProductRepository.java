package pe.com.gourmet.restaurant.application.repository;

import pe.com.gourmet.restaurant.domain.Order;
import pe.com.gourmet.restaurant.domain.OrderProduct;

import java.util.List;

public interface OrderProductRepository {
    OrderProduct create(OrderProduct orderProduct);
    List<OrderProduct> getOrderProducts();
    List<OrderProduct> getOrderProductsByOrder(Order order);
}

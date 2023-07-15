package pe.com.gourmet.restaurant.application.repository;

import pe.com.gourmet.restaurant.domain.Order;
import pe.com.gourmet.restaurant.domain.User;

import java.util.List;

public interface OrderRepository {
    List<Order> getOrders();
    Order create(Order order, Long idUser);
    Order findById(Long id);

    List<Order> getOrdersByIdUser(Long idUser);

}

package pe.com.gourmet.restaurant.application.services;

import pe.com.gourmet.restaurant.application.repository.OrderRepository;
import pe.com.gourmet.restaurant.domain.Order;

import java.util.List;

public class OrderService {
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getOrders() {
        return orderRepository.getOrders();
    }

    public Order create(Order order, Long idUser) {
        return orderRepository.create(order, idUser);
    }

    public Order findById(Long id) {
        return orderRepository.findById(id);
    }

    public List<Order> getOrdersByIdUser(Long idUser) {
        return orderRepository.getOrdersByIdUser(idUser);
    }

}

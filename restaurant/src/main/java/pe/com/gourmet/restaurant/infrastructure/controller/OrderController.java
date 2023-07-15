package pe.com.gourmet.restaurant.infrastructure.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.com.gourmet.restaurant.application.services.OrderService;
import pe.com.gourmet.restaurant.domain.Order;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<Order> getCategories() {
        return orderService.getOrders();
    }

    @PostMapping("/{idUser}")
    public Order create(@RequestBody Order order, @PathVariable Long idUser) {
        return orderService.create(order, idUser);
    }

    @GetMapping("/user/{idUser}")
    public List<Order> getUserByIdUser(@PathVariable Long idUser) {
        return orderService.getOrdersByIdUser(idUser);
    }

    @GetMapping("/{id}")
    public Order getById(@PathVariable Long id) {
        return orderService.findById(id);
    }


}

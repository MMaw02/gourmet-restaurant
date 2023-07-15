package pe.com.gourmet.restaurant.infrastructure.adapter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import pe.com.gourmet.restaurant.application.repository.OrderRepository;
import pe.com.gourmet.restaurant.domain.Order;
import pe.com.gourmet.restaurant.domain.OrderProduct;
import pe.com.gourmet.restaurant.domain.Product;
import pe.com.gourmet.restaurant.domain.Stock;
import pe.com.gourmet.restaurant.infrastructure.adapter.dao.OrderJpaRepository;
import pe.com.gourmet.restaurant.infrastructure.adapter.dao.ProductJpaRepository;
import pe.com.gourmet.restaurant.infrastructure.adapter.dao.StockJpaRepository;
import pe.com.gourmet.restaurant.infrastructure.adapter.dao.UserJpaRepository;
import pe.com.gourmet.restaurant.infrastructure.entity.*;
import pe.com.gourmet.restaurant.infrastructure.mapper.OrderMapper;
import pe.com.gourmet.restaurant.infrastructure.mapper.OrderProductMapper;
import pe.com.gourmet.restaurant.infrastructure.mapper.ProductMapper;
import pe.com.gourmet.restaurant.infrastructure.mapper.UserMapper;

import java.util.List;

@Repository
public class OrderRepositoryImpl implements OrderRepository {

    private final OrderJpaRepository orderJpaRepository;
    private final StockJpaRepository stockJpaRepository;
    private final UserJpaRepository userJpaRepository;
    private final OrderMapper orderMapper;
    private final UserMapper userMapper;
    private final ProductMapper productMapper;
    private final OrderProductMapper orderProductMapper;

    public OrderRepositoryImpl(OrderJpaRepository orderJpaRepository, StockJpaRepository stockJpaRepository, UserJpaRepository userJpaRepository, OrderMapper orderMapper, UserMapper userMapper, ProductMapper productMapper, OrderProductMapper orderProductMapper) {
        this.orderJpaRepository = orderJpaRepository;
        this.stockJpaRepository = stockJpaRepository;
        this.userJpaRepository = userJpaRepository;
        this.orderMapper = orderMapper;
        this.userMapper = userMapper;
        this.productMapper = productMapper;
        this.orderProductMapper = orderProductMapper;
    }

    @Override
    public List<Order> getOrders() {
        List<OrderEntity> orderEntities = orderJpaRepository.findAll();
        return orderMapper.orderEntitiesToOrder(orderEntities);
    }

    @Override
    public Order create(Order order, Long idUser) {
        UserEntity userEntity = userJpaRepository.findById(idUser).orElse(null);
        order.setUser(userMapper.userEntityToUser(userEntity));

//      GUARDAR STOCK
        List<OrderProduct> orderProducts = order.getOrderProducts();
        orderProducts.forEach(op -> {
            Product product = op.getProduct();
            Integer quantity = op.getQuantity();

            StockEntity stockEntity = new StockEntity();
            ProductEntity productEntity = productMapper.productToProductEntity(product);
            stockEntity.setProduct(productEntity);
            stockEntity.setUnitOut(quantity);

            List<StockEntity> stockList = stockJpaRepository.findByProduct(productEntity);
            Integer balance = stockList.get(stockList.size() - 1).getBalance();
            stockEntity.setBalance(balance - quantity);
            stockEntity.setDescription("Venta");
            stockJpaRepository.save(stockEntity);
        });

        OrderEntity orderEntity = orderJpaRepository.save(orderMapper.orderToOrderEntity(order));
        return orderMapper.orderEntityToOrder(orderEntity);
    }

    @Override
    public Order findById(Long id) {
        OrderEntity orderEntity = orderJpaRepository.findById(id).orElse(null);
        return orderMapper.orderEntityToOrder(orderEntity);
    }

    @Override
    public List<Order> getOrdersByIdUser(Long idUser) {
        UserEntity userEntity = userJpaRepository.findById(idUser).orElse(null);
        List<OrderEntity> orderEntities = orderJpaRepository.findByUser(userEntity);
        return orderMapper.orderEntitiesToOrder(orderEntities);
    }
}

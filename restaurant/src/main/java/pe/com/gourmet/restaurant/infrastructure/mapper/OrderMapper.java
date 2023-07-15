package pe.com.gourmet.restaurant.infrastructure.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import pe.com.gourmet.restaurant.domain.Order;
import pe.com.gourmet.restaurant.infrastructure.entity.OrderEntity;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    @Mappings({
            @Mapping(source="id", target="id"),
            @Mapping(source="createdAt", target="createdAt"),
            @Mapping(source="user", target="user"),
            @Mapping(source="orderProducts", target="orderProducts")
    })
    Order orderEntityToOrder(OrderEntity orderEntity);

    @InheritInverseConfiguration
    OrderEntity orderToOrderEntity(Order order);

    List<Order> orderEntitiesToOrder(List<OrderEntity> orderEntities);
}

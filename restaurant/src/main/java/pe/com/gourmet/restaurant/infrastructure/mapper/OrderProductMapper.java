package pe.com.gourmet.restaurant.infrastructure.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import pe.com.gourmet.restaurant.domain.OrderProduct;
import pe.com.gourmet.restaurant.domain.Stock;
import pe.com.gourmet.restaurant.infrastructure.entity.OrderProductEntity;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderProductMapper {

    @Mappings({
            @Mapping(source="id", target="id"),
            @Mapping(source="quantity", target="quantity"),
            @Mapping(source="product", target="product")
    })
    OrderProduct orderProductEntityToOrder(OrderProductEntity orderProductEntity);

    @InheritInverseConfiguration
    OrderProductEntity orderToOrderProductEntity(OrderProduct orderProduct);

    List<Stock> orderProductsEntitiesToOrderProducts(List<OrderProductEntity> orderProductEntities);
}

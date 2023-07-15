package pe.com.gourmet.restaurant.infrastructure.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import pe.com.gourmet.restaurant.domain.Stock;
import pe.com.gourmet.restaurant.infrastructure.entity.StockEntity;

import java.util.List;

@Mapper(componentModel = "spring")
public interface StockMapper {

    @Mappings({
            @Mapping(source="id", target="id"),
            @Mapping(source="unitIn", target="unitIn"),
            @Mapping(source="unitOut", target="unitOut"),
            @Mapping(source="balance", target="balance"),
            @Mapping(source="description", target="description"),
            @Mapping(source="createdAt", target="createdAt"),
            @Mapping(source="product", target="product"),
    })
    Stock stockEntityToStock(StockEntity stockEntity);

    @InheritInverseConfiguration
    StockEntity stockToStockEntity(Stock stock);

    List<Stock> stockEntitiesToStock(List<StockEntity> stockEntities);
}

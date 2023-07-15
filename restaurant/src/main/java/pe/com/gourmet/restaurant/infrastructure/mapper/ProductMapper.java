package pe.com.gourmet.restaurant.infrastructure.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import pe.com.gourmet.restaurant.domain.Product;
import pe.com.gourmet.restaurant.domain.User;
import pe.com.gourmet.restaurant.infrastructure.entity.ProductEntity;
import pe.com.gourmet.restaurant.infrastructure.entity.UserEntity;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "code", target = "code"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "description", target = "description"),
            @Mapping(source = "price", target = "price"),
            @Mapping(source = "image", target = "image"),
            @Mapping(source = "createdAt", target = "createdAt"),
            @Mapping(source = "updatedAt", target = "updatedAt"),
            @Mapping(source = "category", target = "category")
    })
    Product ProductEntityToProduct(ProductEntity productEntity);

    @InheritInverseConfiguration
    ProductEntity productToProductEntity(Product product);

    List<Product> productsEntityToProducts(List<ProductEntity> productEntities);
}

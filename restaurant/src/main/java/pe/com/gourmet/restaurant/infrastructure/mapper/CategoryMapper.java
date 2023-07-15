package pe.com.gourmet.restaurant.infrastructure.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import pe.com.gourmet.restaurant.domain.Category;
import pe.com.gourmet.restaurant.infrastructure.entity.CategoryEntity;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "description", target = "description")
    })
    Category categoryEntityToCategory(CategoryEntity categoryEntity);

    @InheritInverseConfiguration
    CategoryEntity categoryToCategoryEntity(Category category);

    List<Category> categoryEntitiesToCategories(List<CategoryEntity> categoryEntities);
}

package pe.com.gourmet.restaurant.infrastructure.adapter.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.com.gourmet.restaurant.infrastructure.entity.CategoryEntity;
import pe.com.gourmet.restaurant.infrastructure.entity.ProductEntity;

import java.util.List;

public interface ProductJpaRepository extends JpaRepository<ProductEntity, Long> {
    List<ProductEntity> findByNameContainingIgnoreCase(String name);
    List<ProductEntity> findByCategory(CategoryEntity categoryEntity);

//    Busca los primero 6 libros, en order de fecha descendente.
    List<ProductEntity> findTop6ByOrderByCreatedAtDesc();
}

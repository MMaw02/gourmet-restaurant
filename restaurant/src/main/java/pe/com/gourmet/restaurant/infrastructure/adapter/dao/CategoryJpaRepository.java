package pe.com.gourmet.restaurant.infrastructure.adapter.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.com.gourmet.restaurant.infrastructure.entity.CategoryEntity;

public interface CategoryJpaRepository extends JpaRepository<CategoryEntity, Long> {
}

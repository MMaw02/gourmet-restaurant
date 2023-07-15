package pe.com.gourmet.restaurant.infrastructure.adapter.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.com.gourmet.restaurant.infrastructure.entity.ProductEntity;
import pe.com.gourmet.restaurant.infrastructure.entity.StockEntity;

import java.util.List;

public interface StockJpaRepository extends JpaRepository<StockEntity, Long> {
    List<StockEntity> findByProduct(ProductEntity productEntity);
}

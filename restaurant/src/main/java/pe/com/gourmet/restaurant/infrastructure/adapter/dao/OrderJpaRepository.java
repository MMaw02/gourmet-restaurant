package pe.com.gourmet.restaurant.infrastructure.adapter.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.com.gourmet.restaurant.infrastructure.entity.OrderEntity;
import pe.com.gourmet.restaurant.infrastructure.entity.UserEntity;

import java.util.List;

public interface OrderJpaRepository extends JpaRepository<OrderEntity, Long> {
    List<OrderEntity> findByUser(UserEntity user);
}

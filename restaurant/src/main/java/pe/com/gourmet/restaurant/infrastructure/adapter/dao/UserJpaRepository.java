package pe.com.gourmet.restaurant.infrastructure.adapter.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.com.gourmet.restaurant.infrastructure.entity.UserEntity;

import java.util.Optional;

public interface UserJpaRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findOneByUsername(String username);
    Boolean existsByUsername(String username);
}

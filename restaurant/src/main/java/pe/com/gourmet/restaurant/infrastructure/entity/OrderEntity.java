package pe.com.gourmet.restaurant.infrastructure.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orden")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.EAGER) // SI DA ERROR SE CAMBIA A EAGER
    private UserEntity user;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private List<OrderProductEntity> orderProducts;

    @PrePersist
    void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}

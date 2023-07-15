package pe.com.gourmet.restaurant.infrastructure.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import pe.com.gourmet.restaurant.domain.Product;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "stock")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class StockEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer unitIn;
    private Integer unitOut;
    private Integer balance;
    private String description;
    private LocalDateTime createdAt;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private ProductEntity product;

    @PrePersist
    void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}

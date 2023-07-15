package pe.com.gourmet.restaurant.infrastructure.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "order_product")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer quantity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private ProductEntity product;
}

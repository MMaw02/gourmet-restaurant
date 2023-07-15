package pe.com.gourmet.restaurant.domain;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    private Long id;
    private LocalDateTime createdAt;
    private User user;
    private List<OrderProduct> orderProducts;
}

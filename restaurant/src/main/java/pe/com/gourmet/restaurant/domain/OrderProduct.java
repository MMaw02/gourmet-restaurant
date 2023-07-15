package pe.com.gourmet.restaurant.domain;

import lombok.*;


@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderProduct {
    private Long id;
    private Integer quantity;
    private Product product;
}

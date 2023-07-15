package pe.com.gourmet.restaurant.domain;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;


@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    private Long id;
    private String code;
    private String name;
    private String description;
    private BigDecimal price;
    private String image;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    private Category category;
}

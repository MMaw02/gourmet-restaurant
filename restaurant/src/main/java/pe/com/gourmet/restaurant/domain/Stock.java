package pe.com.gourmet.restaurant.domain;

import lombok.*;

import java.time.LocalDateTime;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Stock {
    private Integer id;
    private Integer unitIn;
    private Integer unitOut;
    private Integer balance;
    private String description;
    private LocalDateTime createdAt;

    private Product product;
}

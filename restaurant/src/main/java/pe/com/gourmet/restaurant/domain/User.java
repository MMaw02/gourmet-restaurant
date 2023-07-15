package pe.com.gourmet.restaurant.domain;

import lombok.*;

import java.time.LocalDateTime;


@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Long id;
    private String username;
    private String firstname;
    private String lastname;
    private String dni;
    private String password;
    private String email;
    private String address;
    private String cellphone;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    private UserType userType;
}

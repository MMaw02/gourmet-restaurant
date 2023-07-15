package pe.com.gourmet.restaurant.infrastructure.dto;

import lombok.Data;

@Data
public class SignupUserDTO {

    private String username;
    private String dni;
    private String password;
    private String email;
}

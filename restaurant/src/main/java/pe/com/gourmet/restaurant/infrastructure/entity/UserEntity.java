package pe.com.gourmet.restaurant.infrastructure.entity;

import lombok.*;
import pe.com.gourmet.restaurant.domain.UserType;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "usuario")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String dni;
    private String username;
    private String firstname;
    private String lastname;
    private String password;
    private String email;
    private String address;
    private String cellphone;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @Enumerated(EnumType.STRING)
    private UserType userType;

    @PrePersist
    void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
    @PreUpdate
    void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
//    SI QUEREMOS SABER QUE USUARIO/EMPLEADO GUARDÓ UN PRODUCTO
//    @OneToMany(mappedBy = "user")
//    private List<OrderEntity> order;

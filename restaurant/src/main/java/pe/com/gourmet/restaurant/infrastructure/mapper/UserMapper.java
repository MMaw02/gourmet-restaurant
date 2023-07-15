package pe.com.gourmet.restaurant.infrastructure.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import pe.com.gourmet.restaurant.domain.User;
import pe.com.gourmet.restaurant.infrastructure.entity.UserEntity;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "dni", target = "dni"),
            @Mapping(source = "username", target = "username"),
            @Mapping(source = "firstname", target = "firstname"),
            @Mapping(source = "lastname", target = "lastname"),
            @Mapping(source = "password", target = "password"),
            @Mapping(source = "email", target = "email"),
            @Mapping(source = "address", target = "address"),
            @Mapping(source = "cellphone", target = "cellphone"),
            @Mapping(source = "userType", target = "userType"),
            @Mapping(source = "createdAt", target = "createdAt"),
            @Mapping(source = "updatedAt", target = "updatedAt")
    })
    User userEntityToUser(UserEntity userEntity);

    @InheritInverseConfiguration
    UserEntity userToUserEntity(User user);

    List<User> usersEntityToUsers(List<UserEntity> userEntities);
}

package pe.com.gourmet.restaurant.application.repository;

import pe.com.gourmet.restaurant.domain.User;

import java.util.List;

public interface UserRepository {
    List<User> getUsers();
    User findById(Long id);
    User create(User user);
    User update(Long id, User user);
    void deleteById(Long id);


    User findByUsername(String username);

    Boolean existsByUsername(String username);
}

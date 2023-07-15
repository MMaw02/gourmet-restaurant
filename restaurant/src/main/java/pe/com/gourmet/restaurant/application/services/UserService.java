package pe.com.gourmet.restaurant.application.services;

import pe.com.gourmet.restaurant.application.repository.UserRepository;
import pe.com.gourmet.restaurant.domain.User;

import java.util.List;

public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return userRepository.getUsers();
    }

    public User findById(Long id) {
        return userRepository.findById(id);
    }

    public User create(User user) {
        return userRepository.create(user);
    }

    public User update(Long id, User user) {
        return userRepository.update(id, user);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }


    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }
}

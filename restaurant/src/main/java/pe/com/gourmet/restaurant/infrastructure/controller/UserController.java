package pe.com.gourmet.restaurant.infrastructure.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.com.gourmet.restaurant.application.services.UserService;
import pe.com.gourmet.restaurant.domain.User;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @PostMapping("/admin")
    public User create(@RequestBody User user) {
        return userService.create(user);
    }

    @PutMapping("/admin/{id}")
    public User update(@PathVariable Long id, @RequestBody User user) {
        return userService.update(id, user);
    }

    @DeleteMapping("/admin/{id}")
    public void delete(@PathVariable Long id) {
        userService.deleteById(id);
    }
}

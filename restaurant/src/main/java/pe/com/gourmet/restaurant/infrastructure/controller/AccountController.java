package pe.com.gourmet.restaurant.infrastructure.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;
import pe.com.gourmet.restaurant.application.services.UserService;
import pe.com.gourmet.restaurant.domain.User;
import pe.com.gourmet.restaurant.domain.UserType;
import pe.com.gourmet.restaurant.infrastructure.dto.SignupUserDTO;

import java.security.Principal;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/me")
    User getMyInfo(Principal principal) {
        return userService.findByUsername(principal.getName());
    }

    @PostMapping("/signup")
    User signup(@RequestBody SignupUserDTO signupUserDTO) {
        boolean usernameAlreadyExists = userService.existsByUsername(signupUserDTO.getUsername());

        if (usernameAlreadyExists) {
        }

        String password = passwordEncoder.encode(signupUserDTO.getPassword());

        User user = new ModelMapper().map(signupUserDTO, User.class);
        user.setPassword(password);
        user.setUserType(UserType.USER);

        return userService.create(user);
    }
}

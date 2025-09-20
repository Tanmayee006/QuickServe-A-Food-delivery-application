package in.QuickServe.quickserveapi.controller;

import in.QuickServe.quickserveapi.io.UserRequest;
import in.QuickServe.quickserveapi.io.UserResponse;
import in.QuickServe.quickserveapi.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserService userService;


    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse register(@RequestBody UserRequest request) {
        return userService.registerUser(request);
    }
}

package com.wedog.webdog.controller;

import com.wedog.webdog.dto.User.UserRequest;
import com.wedog.webdog.dto.User.UserResponse;
import com.wedog.webdog.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "http://localhost:4200")
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/create")
    public ResponseEntity<UserResponse> createUser() {
        return new ResponseEntity<>(userService.createUser(), HttpStatus.CREATED);
    }

    @PatchMapping("/update/{userId}")
    public ResponseEntity<UserResponse> editUser(@PathVariable int userId, @RequestBody UserRequest user) {
        return new ResponseEntity<>(userService.editUser(userId, user), HttpStatus.OK);
    }
}

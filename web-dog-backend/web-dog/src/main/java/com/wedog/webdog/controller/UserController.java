package com.wedog.webdog.controller;

import com.wedog.webdog.dto.User.UserRequest;
import com.wedog.webdog.dto.User.UserResponse;
import com.wedog.webdog.entity.User;
import com.wedog.webdog.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

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

    @PatchMapping("/setAvatar/{userId}")
    public ResponseEntity<Void> setAvatar(@PathVariable int userId, @RequestBody UserRequest user){
        userService.setUserAvatar(userId, user);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteUser(@RequestBody UserRequest user){
        try {
            userService.deleteUser(user.getId());
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException exception) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}

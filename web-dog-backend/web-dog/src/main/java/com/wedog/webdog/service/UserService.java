package com.wedog.webdog.service;

import com.wedog.webdog.dto.User.UserRequest;
import com.wedog.webdog.dto.User.UserResponse;
import com.wedog.webdog.entity.User;
import com.wedog.webdog.repository.UserRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private static final Logger log = LogManager.getLogger(User.class);

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public UserResponse createUser() {
        User newUser = new User();
        newUser.setUsername("");
        newUser.setPassword("");
        newUser.setFirstName("");
        newUser.setLastName("");
        newUser.setDescription("");
        newUser.setAvatar("");
        userRepository.save(newUser);
        UserResponse responseUser = new UserResponse();
        responseUser.setId(newUser.getId());
        responseUser.setUsername(newUser.getUsername());
        return responseUser;
    }

    @Transactional
    public UserResponse editUser(int userId, UserRequest user) {
        User reworkUser = userRepository.findById(userId).orElseThrow();

        reworkUser.setUsername(user.getUsername());
        reworkUser.setPassword(user.getPassword());
        reworkUser.setFirstName(user.getFirstName());
        reworkUser.setLastName(user.getLastName());
        reworkUser.setDescription(user.getDescription());
        userRepository.save(reworkUser);
        UserResponse responseUser = new UserResponse();
        responseUser.setId(reworkUser.getId());
        responseUser.setUsername(reworkUser.getUsername());
        return responseUser;
    }

    @Transactional
    public void setUserAvatar(int userId, UserRequest user) {
        User reworkUser = userRepository.findById(userId).orElseThrow();
        reworkUser.setAvatar(user.getAvatar());
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public void deleteUser(int userId) throws Exception {
        Optional<User> userToDelete = userRepository.findById(userId);
        if (userToDelete.isPresent()) {
            userRepository.deleteById(userId);
        } else {
            log.error("User with ID " + userId + " not found");
            throw new NoSuchElementException();
        }
    }
}

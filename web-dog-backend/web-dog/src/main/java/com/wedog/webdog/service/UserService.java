package com.wedog.webdog.service;

import com.wedog.webdog.dto.User.UserRequest;
import com.wedog.webdog.dto.User.UserResponse;
import com.wedog.webdog.entity.User;
import com.wedog.webdog.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Transactional
    public UserResponse createUser (UserRequest user){
        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setDescription(user.getDescription());
        newUser.setAvatar(user.getAvatar());
        userRepository.save(newUser);
        UserResponse responseUser = new UserResponse();
        responseUser.setId(newUser.getId());
        responseUser.setUsername(newUser.getUsername());
        return responseUser;
    }

    @Transactional
    public UserResponse editUser (int userId, UserRequest user){
        User reworkUser = userRepository.findById(userId).orElseThrow();

        reworkUser.setUsername(user.getUsername());
        reworkUser.setPassword(user.getPassword());
        reworkUser.setFirstName(user.getFirstName());
        reworkUser.setLastName(user.getLastName());
        reworkUser.setDescription(user.getDescription());
        reworkUser.setAvatar(user.getAvatar());
        userRepository.save(reworkUser);
        UserResponse responseUser = new UserResponse();
        responseUser.setUsername(reworkUser.getUsername());
        return responseUser;
    }
}

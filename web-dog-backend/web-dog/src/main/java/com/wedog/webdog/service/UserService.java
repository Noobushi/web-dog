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
        responseUser.setUsername(newUser.getUsername());
        return responseUser;
    }
}

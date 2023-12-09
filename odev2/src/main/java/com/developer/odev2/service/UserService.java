package com.developer.odev2.service;
import com.developer.odev2.entity.User;

import java.util.List;
import java.util.Optional;
public interface UserService {

    List<User> findUsers();
    Optional<User> findById(Long id);
    User saveUser(User user);
    User updateUser(User user);
    void deleteUser(Long id);
}

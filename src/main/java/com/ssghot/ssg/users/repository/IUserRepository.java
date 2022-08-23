package com.ssghot.ssg.users.repository;

import com.ssghot.ssg.users.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IUserRepository extends JpaRepository<User, Long> {

    public List<User> findByName(String name);

    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);

    boolean existsByPhone(String phone);
}

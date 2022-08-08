package com.ssghot.ssg.users.repository;

import com.ssghot.ssg.users.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IUserRepository extends JpaRepository<User, Long> {

    public List<User> findByName(String name);

    public List<User> findByEmail(String email);
    boolean existsByEmail(String email);
}

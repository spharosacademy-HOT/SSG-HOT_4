package com.ssghot.ssg.address.repository;

import com.ssghot.ssg.address.domain.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface IAddressRepository extends JpaRepository<Address, Long> {

    boolean existsByUserId(Long userId);


     List<Address> findByUserId(Long userId);
     List<Address> findByUserIdOrderByExistedDesc(Long userId);
    @Transactional
    @Modifying
    @Query("update Address a set a.existed = false where a.user.id = :userId and a.existed = true")
    int replaceAllExistedWithFalse(Long userId);

    @Transactional
    @Modifying
    @Query("update Address a set a.existed = true where a.id = :id and a.user.id = :userId")
    int replaceExistedWithTrue(Long id,Long userId);
    @Query("select a from Address a where a.user.id = :userId and a.existed = true")
    Optional<Address> findExistedByUserId(Long userId);
}

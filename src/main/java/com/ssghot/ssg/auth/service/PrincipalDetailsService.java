package com.ssghot.ssg.auth.service;

import com.ssghot.ssg.auth.domain.PrincipalDetails;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {
    private final IUserRepository iUserRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("PrincipalDetailsService"+username);
        Optional<User> userEntity = iUserRepository.findByEmail(username);
        if(userEntity.isEmpty()){
            throw new UsernameNotFoundException("유저 정보가 없습니다.");
        }
        return new PrincipalDetails(userEntity.get());
    }
}

package com.ssghot.ssg.users.sevice;

import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.dto.*;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service

public class UserServiceImple implements IUserService {

    private final IUserRepository iUserRepository;
//    private final PasswordEncoder passwordEncoder;
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Optional<User> user = iUserRepository.findByEmail(username);
//        if(user==null){
//            log.error("User not found in the database");
//            throw new UsernameNotFoundException("User not found in the database");
//        }else{
//            log.info("User found in the database: {}",username);
//        }
//        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
//       authorities.add(new SimpleGrantedAuthority(user.get().getRole()));
//        return new org.springframework.security.core.userdetails.User(user.get().getEmail(),user.get().getPassword(),authorities);
//    }
    @Override
    public void validateDuplicateUser(User user) {
        List<User> findUsers;
    }

    // 회원 추가하기
    @Override
        public UserDtoOutput addUser(UserDtoInput userDtoInput){

        boolean ischecked = iUserRepository.existsByEmail(userDtoInput.getEmail());
        if(ischecked){
            throw new Error("유저 정보가 존재합니다.");
        }
//        String encode = passwordEncoder.encode(userDtoInput.getPassword());
        User user = iUserRepository.save(userDtoInput.toEntity(userDtoInput.getPassword()));

        return UserDtoOutput.builder()
                .id(user.getId())
                .email(user.getEmail())
                .name(user.getName())
                .phone(user.getPhone())
                .memberLevel(user.getMemberLevel())
                .createdDate(user.getCreatedDate())
                .updatedDate(user.getUpdatedDate())
                .build();
    }

    // 회원 수정하기
    @Override
    public UserDtoOutput editUser(UserEditDtoInput userEditDtoInput){
        Optional<User> user = iUserRepository.findById(userEditDtoInput.getId());
        if(user.isPresent()){
            User updatedUser = iUserRepository.save(User.builder()
                    .id(userEditDtoInput.getId())
                    .name(userEditDtoInput.getName())
                    .phone(userEditDtoInput.getPhone())
                    .name(userEditDtoInput.getName())
                    .password(user.get().getPassword())
                    .email(user.get().getEmail())
                    .memberLevel(user.get().getMemberLevel())
                    .isSlept(user.get().isSlept())
                    .build());

            return UserDtoOutput.builder()
                    .id(updatedUser.getId())
                    .email(updatedUser.getEmail())
                    .name(updatedUser.getName())
                    .phone(updatedUser.getPhone())
                    .memberLevel(updatedUser.getMemberLevel())
                    .createdDate(updatedUser.getCreatedDate())
                    .updatedDate(updatedUser.getUpdatedDate())
                    .build();

        }
        throw new Error("유저 정보가 존재하지 않습니다.");
    }



    // 회원 삭제하기
    @Override
    public void deleteUser(Long id) {
        iUserRepository.deleteById(id);


    }

    // 회원 단일 조회
    @Override
    public UserDtoOutput getUserById(Long id) {
        Optional<User> user = iUserRepository.findById(id);
        if(user.isPresent()){
            return UserDtoOutput.builder()
                    .id(user.get().getId())
                    .email(user.get().getEmail())
                    .name(user.get().getName())
                    .phone(user.get().getPhone())
                    .memberLevel(user.get().getMemberLevel())
                    .createdDate(user.get().getCreatedDate())
                    .updatedDate(user.get().getUpdatedDate())
                    .build();
        }
        return null;
    }

    // 회원 전체 조회
    @Override
    public ResultListDtoOutput<List<UserDtoOutput>> getAll() {
        log.info("getAll User");
        List<User> userList = iUserRepository.findAll();
        List<UserDtoOutput>  userDtoOutputs = userList.stream().map(user->
                UserDtoOutput.builder()
                        .id(user.getId())
                        .email(user.getEmail())
                        .name(user.getName())
                        .phone(user.getPhone())
                        .memberLevel(user.getMemberLevel())
                        .createdDate(user.getCreatedDate())
                        .updatedDate(user.getUpdatedDate())
                        .build()
        ).collect(Collectors.toList());
        return new ResultListDtoOutput<>(userDtoOutputs.size(), userDtoOutputs);
    }

    @Override
    public checkEmailDtoOutPut checkUserEmail(String email) {
        boolean ischecked = iUserRepository.existsByEmail(email);
        checkEmailDtoOutPut s = new checkEmailDtoOutPut();
        if(ischecked){
         return   s.checkSuccess();
        }
        return s.checkFail();
    }



}

package com.ssghot.ssg.users.sevice;

import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.dto.UserDtoInput;
import com.ssghot.ssg.users.dto.UserEditDtoInput;
import com.ssghot.ssg.users.dto.checkEmailDtoOutPut;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service

public class UserServiceImple implements IUserService{

    private final IUserRepository iUserRepository;

    @Override
    public void validateDuplicateUser(User user) {
        List<User> findUsers;
    }

    // 회원 추가하기
    @Override
        public User addUser(UserDtoInput userDtoInput){

        boolean ischecked = iUserRepository.existsByEmail(userDtoInput.getEmail());

        if(ischecked){
            throw new Error("유저 정보가 존재합니다.");
        }

        return iUserRepository.save(userDtoInput.toEntity());
    }

    // 회원 수정하기
    @Override
    public User editUser(UserEditDtoInput userEditDtoInput){
        Optional<User> user = iUserRepository.findById(userEditDtoInput.getId());
        if(user.isPresent()){
            return iUserRepository.save(User.builder()
                            .id(userEditDtoInput.getId())
                            .name(userEditDtoInput.getName())
                            .birthday(userEditDtoInput.getBirthday())
                            .isSlept(user.get().isSlept())
                            .build());
        }
        return null;
    }



    // 회원 삭제하기
    @Override
    public void deleteUser(Long id) {
        iUserRepository.deleteById(id);
    }

    // 회원 단일 조회
    @Override
    public User getUserById(Long id) {
        return iUserRepository.findById(id).get();
    }

    // 회원 전체 조회
    @Override
    public List<User> getAll() {
        log.info("getAll User");
        return iUserRepository.findAll();
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

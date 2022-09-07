package com.ssghot.ssg.users.controller;

import com.ssghot.ssg.users.dto.ResultListDtoOutput;
import com.ssghot.ssg.users.dto.UserDtoOutput;
import com.ssghot.ssg.users.dto.UserEditDtoInput;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final IUserService iUserService;
    @RequestMapping(value = "/home")
    public String home(){
        return "home.html";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('ROLE_USER')")
    public UserDtoOutput getUser(HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        return iUserService.getUserById(userId);
    }

    @GetMapping("")
    public ResultListDtoOutput<List<UserDtoOutput>> getAll(){
        return iUserService.getAll();
    }

    @DeleteMapping("/user")
    @PreAuthorize("hasRole('ROLE_USER')")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteUser(HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        iUserService.deleteUser(userId);
    }

    @PutMapping("")
    public UserDtoOutput editUser(@RequestBody UserEditDtoInput userEditDtoInput) {
        return iUserService.editUser(userEditDtoInput);
    }

}

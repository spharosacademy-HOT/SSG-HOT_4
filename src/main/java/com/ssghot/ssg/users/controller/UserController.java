package com.ssghot.ssg.users.controller;

import com.ssghot.ssg.users.dto.ResultListDtoOutput;
import com.ssghot.ssg.users.dto.UserDtoOutput;
import com.ssghot.ssg.users.dto.UserEditDtoInput;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public UserDtoOutput getUser(@PathVariable Long id){
        return iUserService.getUserById(id);
    }

    @GetMapping("")
    public ResultListDtoOutput<List<UserDtoOutput>> getAll(){
        return iUserService.getAll();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable Long id){
        iUserService.deleteUser(id);
    }

    @PutMapping("")
    public UserDtoOutput editUser(@RequestBody UserEditDtoInput userEditDtoInput) {
        return iUserService.editUser(userEditDtoInput);
    }

}

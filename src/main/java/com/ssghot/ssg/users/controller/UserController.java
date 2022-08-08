package com.ssghot.ssg.users.controller;

import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.dto.UserDtoInput;
import com.ssghot.ssg.users.dto.UserEditDtoInput;
import com.ssghot.ssg.users.dto.checkEmailDtoOutPut;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final IUserService iUserService;

    @RequestMapping(value = "/home")
    public String home(){
        return "home.html";
    }

    @PostMapping("")
    public User addUser(@RequestBody UserDtoInput user) {

        return iUserService.addUser(user);
    }
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id){
        return iUserService.getUserById(id);
    }
    @GetMapping("/mail/{email}")
    public checkEmailDtoOutPut checkUserEmail(@PathVariable String email){
        return iUserService.checkUserEmail(email);
    }
    @GetMapping("")
    public List<User> getAll(){
        return iUserService.getAll();
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        iUserService.deleteUser(id);
    }

    @PutMapping("/edit")
    public User editUser(@RequestBody UserEditDtoInput userEditDtoInput) {
        return iUserService.editUser(userEditDtoInput);
    }

}

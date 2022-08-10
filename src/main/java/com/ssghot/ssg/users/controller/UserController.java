package com.ssghot.ssg.users.controller;

import com.ssghot.ssg.users.dto.*;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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
    public UserDtoOutput addUser(@RequestBody UserDtoInput user) {
        return iUserService.addUser(user);
    }
    @GetMapping("/{id}")
    public UserDtoOutput getUser(@PathVariable Long id){
        return iUserService.getUserById(id);
    }
    @GetMapping("/mail/{email}")
    public checkEmailDtoOutPut checkUserEmail(@PathVariable String email){
        return iUserService.checkUserEmail(email);
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

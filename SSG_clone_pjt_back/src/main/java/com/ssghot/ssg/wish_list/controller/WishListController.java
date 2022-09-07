package com.ssghot.ssg.wish_list.controller;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.users.sevice.IUserService;
import com.ssghot.ssg.wish_list.dto.WishListDtoInput;
import com.ssghot.ssg.wish_list.dto.WishListDtoOutput;
import com.ssghot.ssg.wish_list.service.IWishListService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/wish")
@RequiredArgsConstructor
public class WishListController {
    private final IWishListService iWishListService;
    private final IUserService iUserService;
    @PostMapping
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultDtoOutput<WishListDtoOutput> addWish(@RequestBody WishListDtoInput wishListDtoInput,HttpServletRequest request) {
        Long userId = iUserService.getUserByToken(request);
        wishListDtoInput.setUserId(userId);

        return iWishListService.addWish(wishListDtoInput);
    }
    @GetMapping
    public ResultsDtoOutput<List<WishListDtoOutput>> getAll(){
        return iWishListService.getAll();
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultsDtoOutput<List<WishListDtoOutput>> getWishListByUserId(HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);

        return iWishListService.getWishByUserId(userId);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteWish(@PathVariable Long id){
        iWishListService.deleteWish(id);
    }


}

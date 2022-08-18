package com.ssghot.ssg.wish_list.controller;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.wish_list.dto.WishListDtoInput;
import com.ssghot.ssg.wish_list.dto.WishListDtoOutput;
import com.ssghot.ssg.wish_list.service.IWishListService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/wish")
@RequiredArgsConstructor
public class WishListController {
    private final IWishListService iWishListService;

    @PostMapping
    public ResultDtoOutput<WishListDtoOutput> addWish(@RequestBody WishListDtoInput wishListDtoInput) {
        return iWishListService.addWish(wishListDtoInput);
    }
    @GetMapping
    public ResultsDtoOutput<List<WishListDtoOutput>> getAll(){
        return iWishListService.getAll();
    }

    @GetMapping("/user/{id}")
    public ResultsDtoOutput<List<WishListDtoOutput>> getWishListByUserId(@PathVariable Long id){
        return iWishListService.getWishByUserId(id);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteWish(@PathVariable Long id){
        iWishListService.deleteWish(id);
    }


}

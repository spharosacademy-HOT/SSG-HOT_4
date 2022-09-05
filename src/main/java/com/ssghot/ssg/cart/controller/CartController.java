package com.ssghot.ssg.cart.controller;

import com.ssghot.ssg.cart.dto.*;
import com.ssghot.ssg.cart.service.ICartService;
import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/carts")
@RequiredArgsConstructor
public class CartController {

    private final ICartService iCartService;
    private final IUserService iUserService;

    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultDtoOutput<CartDtoOutput> addCart(@RequestBody CartDtoInput cartDtoInput,HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        cartDtoInput.setUserId(userId);
        return iCartService.addCart(cartDtoInput);
    }
    @GetMapping("")
    public ResultsDtoOutput<List<CartDtoOutput>> getAll(){
        return iCartService.getAll();
    }
    @GetMapping("/{id}")
    public ResultDtoOutput<CartDtoOutput> getCartById(@PathVariable Long id){
       return iCartService.getCartById(id);
    }

    @GetMapping("/users/user")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultsDtoOutput<List<CartByUserDtoOutput>> getCartByUserId(HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        return iCartService.getCartByUserId(userId);
    }
    @PutMapping("/count")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultDtoOutput<CartDtoOutput> editCountCart(@RequestBody CartEditDtoInput cartEditDtoInput,HttpServletRequest request){
        return iCartService.editCountCart(cartEditDtoInput);
    }
    @PutMapping("/stock")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultDtoOutput<CartDtoOutput> editStockCart(@RequestBody CartEditStockDtoInput cartEditStockDtoInput,HttpServletRequest request){

        Long userId = iUserService.getUserByToken(request);
//        System.out.println(userId);
        cartEditStockDtoInput.setUserId(userId);
        return iCartService.editStockCart(cartEditStockDtoInput);
    }
    @PutMapping("/stock/v2")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultDtoOutput<CartDtoOutput> editStockCartV2(@RequestBody CartEditV2DtoInput cartEditV2DtoInput,HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        cartEditV2DtoInput.setUserId(userId);
        return iCartService.editStockCartV2(cartEditV2DtoInput);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteCart(@PathVariable Long id){
        iCartService.deleteCart(id);
    }

}

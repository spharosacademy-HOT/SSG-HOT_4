package com.ssghot.ssg.cart.controller;

import com.ssghot.ssg.cart.dto.CartDtoInput;
import com.ssghot.ssg.cart.dto.CartDtoOutput;
import com.ssghot.ssg.cart.service.ICartService;
import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/carts")
@RequiredArgsConstructor
public class CartController {

//    private final IAddressService iAddressService;
//
//    @PostMapping("")
//    public AddressDtoOutput addAddress(@RequestBody AddressDtoInput addressDtoInput) {
//        return iAddressService.addAddress(addressDtoInput);
//    }
    private final ICartService iCartService;

    @PostMapping("")
    public ResultDtoOutput<CartDtoOutput> addCart(@RequestBody CartDtoInput cartDtoInput){
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

    @GetMapping("/users/{userId}")
    public ResultsDtoOutput<List<CartDtoOutput>> getCartByUserId(@PathVariable Long userId){
        return iCartService.getCartByUserId(userId);
    }


}

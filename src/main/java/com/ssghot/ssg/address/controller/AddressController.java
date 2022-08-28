package com.ssghot.ssg.address.controller;

import com.ssghot.ssg.address.dto.*;
import com.ssghot.ssg.address.service.IAddressService;
import com.ssghot.ssg.users.dto.ResultListDtoOutput;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/address")
@RequiredArgsConstructor
public class AddressController {
    private final IAddressService iAddressService;
    private final IUserService iUserService;

    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_USER')")
    public AddressDtoOutput addAddress(@RequestBody AddressDtoInput addressDtoInput, HttpServletRequest request) {
        Long userId = iUserService.getUserByToken(request);
        addressDtoInput.setUserId(userId);
        return iAddressService.addAddress(addressDtoInput);
    }
    @GetMapping("/user/existed")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Map<String,Object>> findExisted(HttpServletRequest request) {
        Long userId = iUserService.getUserByToken(request);
        boolean existedAddressByUserId = iAddressService.getExistedAddressByUserId(userId);

        Map<String,Object> result = new HashMap<>();
        if(existedAddressByUserId==false){
            result.put("result", false);
            return ResponseEntity.ok().body(result);
        }
        result.put("result", true);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/user/existed/v2")
    @PreAuthorize("hasRole('ROLE_USER')")
    public Map<String,Object> findExistedV2(HttpServletRequest request) {
        Long userId = iUserService.getUserByToken(request);
        boolean existedAddressByUserId = iAddressService.getExistedAddressByUserId(userId);

        Map<String,Object> result = new HashMap<>();
        if(existedAddressByUserId==false){
            result.put("result", false);
            return result;
        }
        result.put("result", true);
        return result;
    }

    @GetMapping("")
    public ResultListDtoOutput<List<AddressDtoOutput>> getAll() {
        return iAddressService.getAll();
    }

    @GetMapping("/users")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultListDtoOutput<List<AddressDtoOutput>> getAddressByUserId(HttpServletRequest request) {
        Long userId = iUserService.getUserByToken(request);
        return iAddressService.getAddressByUserId(userId);
    }

    @PutMapping("")
    public AddressDtoOutput editAddress(@RequestBody AddressDtoEditInput addressDtoEditInput) {
        return iAddressService.editAddress(addressDtoEditInput);
    }

    @PatchMapping
    @PreAuthorize("hasRole('ROLE_USER')")
    public AddressDtoExistedOutput editExisted(@RequestBody AddressDtoExistedInput addressDtoExistedInput,HttpServletRequest request) {
        Long userId = iUserService.getUserByToken(request);
        addressDtoExistedInput.setUserId(userId);
        return iAddressService.changeExistedById(addressDtoExistedInput);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteAddress(@PathVariable Long id){ iAddressService.deleteAddress(id);
    }
}

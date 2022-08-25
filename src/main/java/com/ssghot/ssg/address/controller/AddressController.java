package com.ssghot.ssg.address.controller;

import com.ssghot.ssg.address.dto.*;
import com.ssghot.ssg.address.service.IAddressService;
import com.ssghot.ssg.users.dto.ResultListDtoOutput;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

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
        addressDtoExistedInput.setId(userId);
        return iAddressService.changeExistedById(addressDtoExistedInput);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteAddress(@PathVariable Long id){ iAddressService.deleteAddress(id);
    }
}

package com.ssghot.ssg.address.controller;

import com.ssghot.ssg.address.dto.*;
import com.ssghot.ssg.address.service.IAddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/address")
@RequiredArgsConstructor
public class AddressController {
    private final IAddressService iAddressService;

    @PostMapping("")
    public AddressDtoOutput addAddress(@RequestBody AddressDtoInput addressDtoInput) {
        return iAddressService.addAddress(addressDtoInput);
    }

    @GetMapping("")
    public List<AddressDtoOutput> getAll() {
        return iAddressService.getAll();
    }

    @GetMapping("/users/{userId}")
    public List<AddressDtoOutput> getAddressByUserId(@PathVariable Long userId) {
        return iAddressService.getAddressByUserId(userId);
    }

    @PutMapping("")
    public AddressDtoOutput editAddress(@RequestBody AddressDtoEditInput addressDtoEditInput) {
        return iAddressService.editAddress(addressDtoEditInput);
    }

    @PatchMapping("")
    public AddressDtoExistedOutput editExisted(@RequestBody AddressDtoExistedInput addressDtoExistedInput) {
        return iAddressService.changeExistedById(addressDtoExistedInput);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteAddress(@PathVariable Long id){ iAddressService.deleteAddress(id);
    }
}

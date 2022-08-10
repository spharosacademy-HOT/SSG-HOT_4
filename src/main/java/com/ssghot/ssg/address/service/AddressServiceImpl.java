package com.ssghot.ssg.address.service;

import com.ssghot.ssg.address.domain.Address;
import com.ssghot.ssg.address.dto.*;
import com.ssghot.ssg.address.repository.IAddressRepository;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class AddressServiceImpl implements IAddressService{

    private final IAddressRepository iAddressRepository;
    private final IUserRepository iUserRepository;
    @Override
    public AddressDtoOutput addAddress(AddressDtoInput addressDtoInput) {
        Optional<User> user = iUserRepository.findById(addressDtoInput.getUserId());
        if(user.isPresent()){
            Address address= iAddressRepository.save(addressDtoInput.toEntity(user.get()));
           return getAddressDtoOutput(address);
        }
        return null;
    }

    @Override
    public void deleteAddress(Long id) {
        iAddressRepository.deleteById(id);
    }

    @Override
    public AddressDtoOutput editAddress(AddressDtoEditInput addressDtoEditInput) {
        Optional<Address> address = iAddressRepository.findById(addressDtoEditInput.getId());
        if(address.isPresent()){
        Address getAddress = iAddressRepository.save(Address.builder()
                    .id(addressDtoEditInput.getId())
                    .alias(addressDtoEditInput.getAlias())
                    .taker(addressDtoEditInput.getTaker())
                    .phone(addressDtoEditInput.getPhone())
                    .homePhone(addressDtoEditInput.getHomePhone())
                    .city(addressDtoEditInput.getCity())
                    .street(addressDtoEditInput.getStreet())
                    .zipcode(addressDtoEditInput.getZipcode())
                    .user(address.get().getUser())
                    .build());
           return getAddressDtoOutput(getAddress);
        }
        return null;
    }

    @Override
    public AddressDtoExistedOutput changeExistedById(AddressDtoExistedInput addressDtoExistedInput) {
        iAddressRepository.replaceAllExistedWithFalse(addressDtoExistedInput.getUserId());
        int count = iAddressRepository.replaceExistedWithTrue(addressDtoExistedInput.getId(), addressDtoExistedInput.getUserId());
        if(count==1){
           return getAddressDtoExistedOutput(200, "success","값이 변경되었습니다");
        }
        return getAddressDtoExistedOutput(404, "fail","값이 변경되지 않았습니다.");
    }

    @Override
    public List<AddressDtoOutput> getAddressByUserId(Long userId) {
        Optional<User> user = iUserRepository.findById(userId);
        if(user.isPresent()){
            List<Address> byUserId = iAddressRepository.findByUserIdOrderByExistedDesc(userId);
            return getAddressDtoOutputs(byUserId);
        }
        return null;
    }

    @Override
    public List<AddressDtoOutput> getAll() {
        List<Address> addresses = iAddressRepository.findAll();
        return getAddressDtoOutputs(addresses);
    }
    public AddressDtoExistedOutput getAddressDtoExistedOutput(int status, String result, String message){
        AddressDtoExistedOutput build = AddressDtoExistedOutput.builder()
                .status(status)
                .result(result)
                .message(message)
                .build();
        return build;
    }

    public AddressDtoOutput getAddressDtoOutput(Address address){
        AddressDtoOutput addressDtoOutput = AddressDtoOutput.builder()
                .id(address.getId())
                .alias(address.getAlias())
                .taker(address.getTaker())
                .phone(address.getPhone())
                .homePhone(address.getHomePhone())
                .city(address.getCity())
                .street(address.getStreet())
                .zipcode(address.getZipcode())
                .existed(address.isExisted())
                .userId(address.getUser().getId())
                .createdDate(address.getCreatedDate())
                .updatedDate(address.getUpdatedDate())
                .build();
        return addressDtoOutput;
    }
    private List<AddressDtoOutput> getAddressDtoOutputs(List<Address> addresses) {
        List<AddressDtoOutput> addressDtoOutputs = new ArrayList<>();
        addresses.forEach(
                address -> {
                    addressDtoOutputs.add(
                            AddressDtoOutput.builder()
                                    .id(address.getId())
                                    .alias(address.getAlias())
                                    .taker(address.getTaker())
                                    .phone(address.getPhone())
                                    .homePhone(address.getHomePhone())
                                    .city(address.getCity())
                                    .street(address.getStreet())
                                    .zipcode(address.getZipcode())
                                    .existed(address.isExisted())
                                    .userId(address.getUser().getId())
                                    .createdDate(address.getCreatedDate())
                                    .updatedDate(address.getUpdatedDate())
                                    .build()
                    );
                }
        );
        return addressDtoOutputs;
    }
}

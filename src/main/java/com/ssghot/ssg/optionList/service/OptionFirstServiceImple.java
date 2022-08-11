package com.ssghot.ssg.optionList.service;

import com.ssghot.ssg.optionList.domain.OptionFirst;
import com.ssghot.ssg.optionList.repository.IOptionFirstRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OptionFirstServiceImple implements IOptionFirstService{

    private final IOptionFirstRepository iOptionFirstRepository;

    @Override
    public OptionFirst addOptionFirst(OptionFirst optionFirst) {
        return iOptionFirstRepository.save(optionFirst);
    }

    @Override
    public OptionFirst editOptionFirst(int id) {

        Optional<OptionFirst> optionFirstList = iOptionFirstRepository.findById(id);
        if(optionFirstList.isPresent()){
            return iOptionFirstRepository.save(optionFirstList.get());
        }

        return null;
    }

    @Override
    public List<OptionFirst> getAllOptionFirst() {
        return iOptionFirstRepository.findAll();
    }
}

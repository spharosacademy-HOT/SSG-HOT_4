package com.ssghot.ssg.optionList.service;

import com.ssghot.ssg.optionList.domain.OptionSecond;
import com.ssghot.ssg.optionList.repository.IOptionSecondRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OptionSecondServiceImple implements IOptionSecondService{

    private final IOptionSecondRepository iOptionSecondRepository;

    @Override
    public OptionSecond addOptionSecond(OptionSecond optionSecond) {
        return iOptionSecondRepository.save(optionSecond);
    }

    @Override
    public OptionSecond editOptionSecond(int id) {
        Optional<OptionSecond> optionSecondList = iOptionSecondRepository.findById(id);
        if (optionSecondList.isPresent()){
            return iOptionSecondRepository.save(optionSecondList.get());
        }

        return null;
    }

    @Override
    public List<OptionSecond> getAllOptionSecond() {
        return iOptionSecondRepository.findAll();
    }
}

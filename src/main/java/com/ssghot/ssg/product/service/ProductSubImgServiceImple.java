package com.ssghot.ssg.product.service;

import com.ssghot.ssg.product.domain.ProductSubImg;
import com.ssghot.ssg.product.repository.IProductSubImgRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductSubImgServiceImple implements IProductSubImgService{

    private final IProductSubImgRepository iProductSubImgRepository;

    /*
        1. 서브 이미지 등록하기
        2. 서브 이미지 수정하기
        3. 서브 이미지 전체 조회하기
        4. 서브 이미지 단일 조회하기
     */

    // 1. 서브 이미지 등록하기
    @Override
    public ProductSubImg addProductSubImg(ProductSubImg productSubImg) {
        return iProductSubImgRepository.save(productSubImg);
    }

    // 2. 서브 이미지 수정하기

    // 3. 서브 이미지 전체 조회하기
    @Override
    public List<ProductSubImg> getAll() {
        return iProductSubImgRepository.findAll();
    }

    // 4. 서브 이미지 단일 조회하기
    @Override
    public ProductSubImg getOne(Long productSubImgId) {
        return iProductSubImgRepository.findById(productSubImgId).get();
    }
}
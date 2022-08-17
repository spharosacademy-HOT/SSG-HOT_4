package com.ssghot.ssg.product.service;

import com.ssghot.ssg.product.domain.ProductSubImg;
import com.ssghot.ssg.product.dto.ProductSubImgDtoInput;
import com.ssghot.ssg.product.dto.ProductSubImgDtoOutputAll;
import com.ssghot.ssg.product.dto.ProductSubImgDtoOutputOnlyId;
import com.ssghot.ssg.product.repository.IProductSubImgRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    public ProductSubImg addProductSubImg(ProductSubImgDtoInput productSubImgDtoInput) {

        return iProductSubImgRepository.save(
            ProductSubImg.builder()
                    .subImgUrl(productSubImgDtoInput.getSubImgUrl())
                    .subImgTxt(productSubImgDtoInput.getSubImgTxt())
                    .product(productSubImgDtoInput.getProduct())
                    .build()
        );
    }



    // 2. 서브 이미지 수정하기
    @Override
    public ProductSubImg editProductSubImg(Long id, ProductSubImgDtoInput productSubImgDtoInput) {
        Optional<ProductSubImg> productSubImg = iProductSubImgRepository.findById(id);
        if(productSubImg.isPresent()){
            iProductSubImgRepository.save(
                ProductSubImg.builder()
                        .subImgUrl(productSubImgDtoInput.getSubImgUrl())
                        .subImgTxt(productSubImgDtoInput.getSubImgTxt())
                        .product(productSubImgDtoInput.getProduct())
                        .build()
            );
        }

        return null;
    }

    // 3-1. 서브 이미지 전체 조회하기 (아이디만)
    @Override
    public List<ProductSubImgDtoOutputOnlyId> getAllOnlyId() {
        List<ProductSubImg> productSubImgList = iProductSubImgRepository.findAll();
        List<ProductSubImgDtoOutputOnlyId> productSubImgDtoOutputOnlyIdList = new ArrayList<>();

        productSubImgList.forEach(productSubImg -> {
            productSubImgDtoOutputOnlyIdList.add(
                    ProductSubImgDtoOutputOnlyId.builder()
                            .id(productSubImg.getId())
                            .build()
            );
                }

        );

        return productSubImgDtoOutputOnlyIdList;
    }

    // 3-2. 서브 이미지 전체 조회하기 (전체 컬럼)
    @Override
    public List<ProductSubImgDtoOutputAll> getAll() {
        List<ProductSubImg> productSubImgList = iProductSubImgRepository.findAll();
        List<ProductSubImgDtoOutputAll> productSubImgDtoOutputAllList = new ArrayList<>();

        productSubImgList.forEach(productSubImg -> {
            productSubImgDtoOutputAllList.add(
                    ProductSubImgDtoOutputAll.builder()
                            .id(productSubImg.getId())
                            .subImgTxt(productSubImg.getSubImgTxt())
                            .subImgUrl(productSubImg.getSubImgUrl())
                            .productId(productSubImg.getProduct().getId())
                            .build()
            );
        });

        return productSubImgDtoOutputAllList;
    }

    // 4. 서브 이미지 단일 조회하기
    @Override
    public ProductSubImgDtoOutputAll getOne(Long productSubImgId) {
        ProductSubImg productSubImg = iProductSubImgRepository.findById(productSubImgId).get();

        return ProductSubImgDtoOutputAll.builder()
                .id(productSubImg.getId())
                .subImgUrl(productSubImg.getSubImgUrl())
                .subImgTxt(productSubImg.getSubImgTxt())
                .productId(productSubImg.getProduct().getId())
                .build();

    }
}
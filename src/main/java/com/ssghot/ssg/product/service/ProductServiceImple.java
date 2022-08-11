package com.ssghot.ssg.product.service;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.category.repository.ICategoryMRepository;
import com.ssghot.ssg.category.repository.ICategoryRepository;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.domain.ProductSubImg;
import com.ssghot.ssg.product.dto.ProductDtoInputAll;
import com.ssghot.ssg.product.dto.ProductDtoOutputAll;
import com.ssghot.ssg.product.repository.IProductRepository;
import com.ssghot.ssg.product.repository.IProductSubImgRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductServiceImple implements IProductService{

    private final IProductRepository iProductRepository;
    private final IProductSubImgRepository iProductSubImgRepository;

    private final ICategoryMRepository iCategoryMRepository;

    private final ICategoryRepository iCategoryRepository;

    /*
        1. 상품 등록하기
        2. 상품 수정하기
        3. 상품 전체 조회하기
        4. 상품 단일 조회하기
     */

    // 1. 상품 등록하기
    @Override
    public Product addProduct(ProductDtoInputAll productDtoInputAll) {

//        return iProductRepository.save(
//                Product.builder()
//                        .name(productDtoInputAll.getName())
//                        .price(productDtoInputAll.getPrice())
//                        .stockQuantity(productDtoInputAll.getStockQuantity())
//                        .star(0)
//                        .detail(productDtoInputAll.getDetail())
//                        .deliveryCondition(productDtoInputAll.getDeliveryCondition())
//                        .viewCount(0)
//                        .sellCount(0)
//                        .brandName(productDtoInputAll.getBrandName())
//                        .optionList(productDtoInputAll.getOptionList())
//                        .titleImgUrl(productDtoInputAll.getTitleImgUrl())
//                        .titleImgTxt(productDtoInputAll.getTitleImgTxt())
//                        .build()
//        );

        iCategoryRepository.save(Category.builder()
                        .id(productDtoInputAll.getId())
                        .name(productDtoInputAll.getName())
                .build());

        Product product = iProductRepository.save(Product.builder()
                .name(productDtoInputAll.getName())
                .price(productDtoInputAll.getPrice())
//                .stockQuantity(productDtoInputAll.getStockQuantity())
                .star(0)
                .detail(productDtoInputAll.getDetail())
                .deliveryCondition(productDtoInputAll.getDeliveryCondition())
                .viewCount(0)
                .sellCount(0)
                .brandName(productDtoInputAll.getBrandName())
//                .optionList(productDtoInputAll.getOptionList())
                .titleImgUrl(productDtoInputAll.getTitleImgUrl())
                .titleImgTxt(productDtoInputAll.getTitleImgTxt())
                .build());

        // List라 forEach로 풀어서 넣는다.
        productDtoInputAll.getProductSubImgList().forEach(productSubImg -> {
            iProductSubImgRepository.save(ProductSubImg.builder()
                            .id(productSubImg.getId())
                            .subImgTxt(productSubImg.getSubImgTxt())
                            .subImgUrl(productSubImg.getSubImgUrl())
                            .product(product)
                    .build()
            );
        });



        return product;
    }

    // 2. 상품 수정하기
    @Override
    public Product editProduct(Long id, ProductDtoInputAll productDtoInputAll) {
        Optional<Product> product = iProductRepository.findById(id);
        if(product.isPresent()){
            return iProductRepository.save(
                    Product.builder()
                            .id(id)
                            .name(productDtoInputAll.getName())
                            .price(productDtoInputAll.getPrice())
//                            .stockQuantity(productDtoInputAll.getStockQuantity())
                            .detail(productDtoInputAll.getDetail())
                            .deliveryCondition(productDtoInputAll.getDeliveryCondition())
                            .brandName(productDtoInputAll.getBrandName())
//                            .optionList(productDtoInputAll.getOptionList())
                            .titleImgUrl(productDtoInputAll.getTitleImgUrl())
                            .titleImgTxt(productDtoInputAll.getTitleImgTxt())
                            .build()
            );
        }
        return null;
    }

    // 3. 상품 전체 조회하기
    @Override
    public List<ProductDtoOutputAll> getProductAll() {

        List<Product> productList = iProductRepository.findAll();
        List<ProductDtoOutputAll> productDtoOutputAllList = new ArrayList<>();

        productList.forEach(
                product -> {
                    productDtoOutputAllList.add(
                            ProductDtoOutputAll.builder()
                                    .id(product.getId())
                                    .name(product.getName())
                                    .price(product.getPrice())
//                                    .stockQuantity(product.getStockQuantity())
                                    .star(product.getStar())
                                    .detail(product.getDetail())
                                    .deliveryCondition(product.getDeliveryCondition())
                                    .viewCount(product.getViewCount())
                                    .sellCount(product.getSellCount())
                                    .brandName(product.getBrandName())
//                                    .optionList(product.getOptionList())
                                    .titleImgUrl(product.getTitleImgUrl())
                                    .titleImgTxt(product.getTitleImgTxt())
                                    .productSubImgList(iProductSubImgRepository.findAllByProductId(product.getId())) // 수정 필요
                                    .build()
                    );
                }
        );
        return productDtoOutputAllList;
    }

    // 4. 상품 단일 조회하기
    @Override
    public Product getProductOne(Long productId) {

        return iProductRepository.findById(productId).get();
    }
}

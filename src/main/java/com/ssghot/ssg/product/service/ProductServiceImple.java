package com.ssghot.ssg.product.service;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.category.repository.ICategoryMRepository;
import com.ssghot.ssg.category.repository.ICategoryRepository;
import com.ssghot.ssg.categoryProductList.repository.ICategoryProductListRepository;
import com.ssghot.ssg.optionList.repository.IStockRepository;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.domain.ProductSubImg;
import com.ssghot.ssg.product.dto.*;
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

    private final IStockRepository iStockRepository;

    private final ICategoryProductListRepository iCategoryProductListRepository;

    /*
        1. 상품 등록하기
        2. 상품 수정하기
        3-1. 상품 전체 조회하기 (전체 컬럼)
        3-2. 상품 전체 조회하기 (각각의 아이디만)
        4. 상품 단일 조회하기
        5. 상품-재고 현황 조회하기
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
                .regularPrice(productDtoInputAll.getRegularPrice())
                .discountPrice(productDtoInputAll.getDiscountPrice())
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
                            .regularPrice(productDtoInputAll.getRegularPrice())
                            .discountPrice(productDtoInputAll.getDiscountPrice())
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

    // 3-1. 상품 전체 조회하기 (전체 컬럼)
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
                                    .regularPrice(product.getRegularPrice())
                                    .discountPrice(product.getDiscountPrice())
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
                                    .stockList(iStockRepository.findAllByProductId(product.getId()))
                                    .categoryProductList(iCategoryProductListRepository.findAllByProductId(product.getId()))
                                    .build()
                    );
                }
        );
        return productDtoOutputAllList;
    }

    // 3-2. 상품 전체 조회하기 (각각의 아이디만)
    @Override
    public List<ProductDtoOutputAllAndEachId> getProductAllAndEachId() {
        List<Product> productList = iProductRepository.findAll();
        List<ProductDtoOutputAllAndEachId> productDtoOutputAllAndEachIdList = new ArrayList<>();

        productList.forEach(product -> {
            productDtoOutputAllAndEachIdList.add(
                    ProductDtoOutputAllAndEachId.builder()
                            .id(product.getId())
                            .brandName(product.getBrandName())
                            .deliveryCondition(product.getDeliveryCondition())
                            .detail(product.getDetail())
                            .sellCount(product.getSellCount())
                            .discountPrice(product.getDiscountPrice())
                            .name(product.getName())
                            .viewCount(product.getViewCount())
                            .star(product.getStar())
                            .titleImgUrl(product.getTitleImgUrl())
                            .titleImgTxt(product.getTitleImgTxt())
                            .regularPrice(product.getRegularPrice())
                            .productSubImgList(iProductSubImgRepository.allByProductId(product.getId()))
//                            .stockList(iStockRepository.findAllByProductId(product.getId()))
//                            .categoryProductList(iCategoryProductListRepository.findAllByProductId(product.getId()))
                            .build()
            );
        });


        return productDtoOutputAllAndEachIdList;
    }

    // 4. 상품 단일 조회하기
    @Override
    public ProductDtoOutputAllDetail getProductOne(Long productId) {
        Optional<Product> product = iProductRepository.findById(productId);
        if(product.isPresent()){
            return ProductDtoOutputAllDetail.builder()
                    .id(productId)
                    .name(product.get().getName())
                    .star(product.get().getStar())
                    .discountPrice(product.get().getDiscountPrice())
                    .titleImgTxt(product.get().getTitleImgTxt())
                    .titleImgUrl(product.get().getTitleImgUrl())
                    .brandName(product.get().getBrandName())
                    .sellCount(product.get().getSellCount())
                    .viewCount(product.get().getViewCount())
                    .deliveryCondition(product.get().getDeliveryCondition())
                    .detail(product.get().getDetail())
                    .regularPrice(product.get().getRegularPrice())
                    .categoryProductList(iCategoryProductListRepository.findAllByProductId(product.get().getId()))
                    .productSubImgList(iProductSubImgRepository.findAllByProductId(product.get().getId()))
                    .stockList(iStockRepository.findAllByProductId(product.get().getId()))
                    .build();
        }

        return null;
    }

    // 5. 상품-재고 현황 조회하기
    @Override
    public ProductDtoOutputStockByProductId getStockByProductId(Long id) {
        Optional<Product> product = iProductRepository.findById(id);

        ProductDtoOutputIdName productDtoOutputIdName = ProductDtoOutputIdName.builder()
                .id(product.get().getId())
                .name(product.get().getName())
                .build();

        ProductDtoOutputStockByProductId productDtoOutputStockByProductId = null;

        return ProductDtoOutputStockByProductId.builder()
                .id(product.get().getId())
//                .stock(iStockRepository.findAllByProductId(productDtoOutputIdName.getId()))
                .build();
    }

    // 6. 상품 Id, Name 조회하기
    @Override
    public ProductDtoOutputIdName getProductIdName(Long productId) {
        Product product = iProductRepository.findById(productId).get();

        return ProductDtoOutputIdName.builder()
                .id(product.getId())
                .name(product.getName())
                .build();
    }
}

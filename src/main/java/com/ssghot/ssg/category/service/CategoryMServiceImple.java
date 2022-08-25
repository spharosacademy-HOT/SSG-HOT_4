package com.ssghot.ssg.category.service;

import com.ssghot.ssg.category.domain.Category;
import com.ssghot.ssg.category.domain.CategoryM;
import com.ssghot.ssg.category.dto.*;
import com.ssghot.ssg.category.repository.ICategoryMRepository;
import com.ssghot.ssg.category.repository.ICategoryRepository;
import com.ssghot.ssg.categoryProductList.domain.CategoryProductList;
import com.ssghot.ssg.categoryProductList.dto.CategoryProductListDtoOutput;
import com.ssghot.ssg.categoryProductList.repository.ICategoryProductListRepository;
import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.optionList.dto.StockDtoOutputOnlyId;
import com.ssghot.ssg.optionList.repository.IStockRepository;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.domain.ProductSubImg;
import com.ssghot.ssg.product.dto.ProductDtoOutputAll;
import com.ssghot.ssg.product.dto.ProductSubImgDtoOutputOnlyId;
import com.ssghot.ssg.product.repository.IProductRepository;
import com.ssghot.ssg.product.repository.IProductSubImgRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryMServiceImple implements ICategoryMService{

    private final ICategoryMRepository iCategoryMRepository;
    private final ICategoryRepository iCategoryRepository;
    private final IProductRepository iProductRepository;
    private final IStockRepository iStockRepository;
    private final IProductSubImgRepository iProductSubImgRepository;
    private final ICategoryProductListRepository iCategoryProductListRepository;

    /*
        1. 카테고리 중분류 등록하기
        2. 카테고리 중분류 수정하기
        3. 카테고리 중분류 전체 조회하기
        4. 카테고리 중분류 단일 조회하기
     */

    // 1. 카테고리 중분류 등록하기
    @Override
    public CategoryM addCategoryM(CategoryMDtoInput categoryMDtoInput) {

        return iCategoryMRepository.save(
                CategoryM.builder()
                        .name(categoryMDtoInput.getName())
                        .category(categoryMDtoInput.getCategory())
                        .build()
        );
    }

    // 2. 카테고리 중분류 수정하기
    @Override
    public CategoryM editCategoryM(Long id, CategoryMDtoInput categoryMDtoInput) {
        CategoryM categoryM = iCategoryMRepository.findById(id).get();
        if(categoryM != null){
           iCategoryMRepository.save(CategoryM.builder()
                           .id(id)
                           .name(categoryMDtoInput.getName())
                           .category(categoryMDtoInput.getCategory())
                   .build());
           return categoryM;
        }

        return null;
    }

    // 3. 카테고리 중분류 전체 조회하기
    @Override
    public List<CategoryMDtoOutputIdAndName> getAllCategoryM() {

        List<CategoryM> categoryMList = iCategoryMRepository.findAll();
        List<CategoryMDtoOutputIdAndName> categoryMDtoOutputIdAndNameList = new ArrayList<>();



        categoryMList.forEach(
                categoryM -> {

                    // Product
                    List<Product> productList = iProductRepository.findAllByCategoryMId(categoryM.getId());
                    List<ProductDtoOutputAll> productDtoOutputAllList = new ArrayList<>();

                    productList.forEach(product -> {

                        // Stock
                        List<Stock> stockList = iStockRepository.findAllByProductId(product.getId());
                        List<StockDtoOutputOnlyId> stockDtoOutputOnlyIdList = new ArrayList<>();

                        stockList.forEach(stock -> {
                            stockDtoOutputOnlyIdList.add(
                                    StockDtoOutputOnlyId.builder()
                                            .id(stock.getId())
                                            .build()
                            );
                        });

                        // SubImg
                        List<ProductSubImg> productSubImgList = iProductSubImgRepository.findAllByProductId(product.getId());
                        List<ProductSubImgDtoOutputOnlyId> productSubImgDtoOutputOnlyIdList = new ArrayList<>();

                        productSubImgList.forEach(productSubImg -> {
                            productSubImgDtoOutputOnlyIdList.add(
                                    ProductSubImgDtoOutputOnlyId.builder()
                                            .id(productSubImg.getId())
                                            .build()
                            );
                        });

                        // CategoryProduct
                        List<CategoryProductList> categoryProductLists = iCategoryProductListRepository.findAllByProductId(product.getId());
                        List<CategoryProductListDtoOutput> categoryProductListDtoOutputList = new ArrayList<>();

                        categoryProductLists.forEach(categoryProductList -> {
                            categoryProductListDtoOutputList.add(
                                    CategoryProductListDtoOutput.builder()
                                            .id(categoryProductList.getId())
                                            .categoryMId(categoryProductList.getCategoryM().getId())
                                            .categoryId(categoryProductList.getCategory().getId())
                                            .productId(categoryProductList.getProduct().getId())
                                            .build()
                            );
                        });

                        productDtoOutputAllList.add(
                                ProductDtoOutputAll.builder()
                                        .id(product.getId())
                                        .name(product.getName())
                                        .regularPrice(product.getRegularPrice())
                                        .discountPrice(product.getDiscountPrice())
                                        .discountRate(product.getDiscountRate())
                                        .shippingFee(product.getShippingFee())
                                        .detail(product.getDetail())
                                        .star(product.getStar())
                                        .deliveryCondition(product.getDeliveryCondition())
                                        .viewCount(product.getViewCount())
                                        .sellCount(product.getSellCount())
                                        .brandName(product.getBrandName())
                                        .titleImgUrl(product.getTitleImgUrl())
                                        .titleImgTxt(product.getTitleImgTxt())
                                        .stockList(stockDtoOutputOnlyIdList)
                                        .productSubImgList(productSubImgDtoOutputOnlyIdList)
                                        .categoryProductList(categoryProductListDtoOutputList)
                                        .build()
                        );
                    });

                    Optional<Category> category = iCategoryRepository.findById(categoryM.getCategory().getId());
                    CategoryDtoOutputLargeId categoryDtoOutputLargeId = CategoryDtoOutputLargeId.builder()
                            .id(category.get().getId())
                            .name(category.get().getName())
                            .build();

                    categoryMDtoOutputIdAndNameList.add(
                            CategoryMDtoOutputIdAndName.builder()
                                    .id(categoryM.getId())
                                    .name(categoryM.getName())
                                    .productList(productDtoOutputAllList)
                                    .category(categoryDtoOutputLargeId)
                                    .build()
                    );
                }
        );

        return categoryMDtoOutputIdAndNameList;
    }

    // 4. 카테고리 중분류 단일 조회하기
    @Override
    public CategoryMDtoOutput getOneCategoryM(Long categoryMId) {

        Optional<CategoryM> categoryM = iCategoryMRepository.findById(categoryMId);

        CategoryMDtoOutput categoryMDtoOutput = null;

        List<Product> productList = iProductRepository.findAllByCategoryMId(categoryM.get().getId());
        List<ProductDtoOutputAll> productDtoOutputAllList = new ArrayList<>();

        productList.forEach(product -> {

            // Stock
            List<Stock> stockList = iStockRepository.findAllByProductId(product.getId());
            List<StockDtoOutputOnlyId> stockDtoOutputOnlyIdList = new ArrayList<>();

            stockList.forEach(stock -> {
                stockDtoOutputOnlyIdList.add(
                        StockDtoOutputOnlyId.builder()
                                .id(stock.getId())
                                .build()
                );
            });

            // SubImg
            List<ProductSubImg> productSubImgList = iProductSubImgRepository.findAllByProductId(product.getId());
            List<ProductSubImgDtoOutputOnlyId> productSubImgDtoOutputOnlyIdList = new ArrayList<>();

            productSubImgList.forEach(productSubImg -> {
                productSubImgDtoOutputOnlyIdList.add(
                        ProductSubImgDtoOutputOnlyId.builder()
                                .id(productSubImg.getId())
                                .build()
                );
            });

            // CategoryProduct
            List<CategoryProductList> categoryProductLists = iCategoryProductListRepository.findAllByProductId(product.getId());
            List<CategoryProductListDtoOutput> categoryProductListDtoOutputList = new ArrayList<>();

            categoryProductLists.forEach(categoryProductList -> {
                categoryProductListDtoOutputList.add(
                        CategoryProductListDtoOutput.builder()
                                .id(categoryProductList.getId())
                                .categoryMId(categoryProductList.getCategoryM().getId())
                                .categoryId(categoryProductList.getCategory().getId())
                                .productId(categoryProductList.getProduct().getId())
                                .build()
                );
            });

            productDtoOutputAllList.add(
                    ProductDtoOutputAll.builder()
                            .id(product.getId())
                            .name(product.getName())
                            .regularPrice(product.getRegularPrice())
                            .discountPrice(product.getDiscountPrice())
                            .discountRate(product.getDiscountRate())
                            .shippingFee(product.getShippingFee())
                            .detail(product.getDetail())
                            .star(product.getStar())
                            .deliveryCondition(product.getDeliveryCondition())
                            .viewCount(product.getViewCount())
                            .sellCount(product.getSellCount())
                            .brandName(product.getBrandName())
                            .titleImgUrl(product.getTitleImgUrl())
                            .titleImgTxt(product.getTitleImgTxt())
                            .stockList(stockDtoOutputOnlyIdList)
                            .productSubImgList(productSubImgDtoOutputOnlyIdList)
                            .categoryProductList(categoryProductListDtoOutputList)
                            .build()
            );
        });

        if(categoryM.isPresent()){
            categoryMDtoOutput = CategoryMDtoOutput.builder()
                    .id(categoryM.get().getId())
                    .name(categoryM.get().getName())
                    .category(categoryM.get().getCategory())
                    .productList(productDtoOutputAllList)
                    .build();
        }

        return categoryMDtoOutput;
    }
}

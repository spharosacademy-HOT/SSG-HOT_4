package com.ssghot.ssg.product.service;

import com.ssghot.ssg.category.repository.ICategoryMRepository;
import com.ssghot.ssg.category.repository.ICategoryRepository;
import com.ssghot.ssg.categoryProductList.domain.CategoryProductList;
import com.ssghot.ssg.categoryProductList.dto.CategoryProductListDtoOutput;
import com.ssghot.ssg.categoryProductList.repository.ICategoryProductListRepository;
import com.ssghot.ssg.optionList.domain.Stock;
import com.ssghot.ssg.optionList.dto.StockDtoOutputProductIdName;
import com.ssghot.ssg.optionList.repository.IStockRepository;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.domain.ProductSubImg;
import com.ssghot.ssg.product.dto.*;
import com.ssghot.ssg.product.repository.IProductRepository;
import com.ssghot.ssg.product.repository.IProductSubImgRepository;
import com.ssghot.ssg.review.domain.Review;
import com.ssghot.ssg.review.repository.IReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductServiceImple implements IProductService{

    private final IProductRepository iProductRepository;
    private final IProductSubImgRepository iProductSubImgRepository;

    private final ICategoryMRepository iCategoryMRepository;

    private final ICategoryRepository iCategoryRepository;

    private final IStockRepository iStockRepository;

    private final ICategoryProductListRepository iCategoryProductListRepository;
    private final IReviewRepository iReviewRepository;

    /*
        1. 상품 등록하기
        2. 상품 수정하기
        3-1. 상품 전체 조회하기 (전체 컬럼)
        3-2. 상품 전체 조회하기 (각각의 아이디만)
        4. 상품 단일 조회하기
        5. 상품-재고 현황 조회하기
        6. 상품 Id, Name 조회하기
        7-1. 상품 검색하기 (페이징) - 이름만
        7-2. 상품 검색하기 (페이징) - 이름, 카테고리 중분류 id
        7-3. 상품 검색하기 (페이징) - 이름, 가격대
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

//        iCategoryRepository.save(Category.builder()
//                        .id(productDtoInputAll.getCategory().getId())
//                        .name(productDtoInputAll.getCategory().getName())
//                .build());

//        iCategoryMRepository.save(CategoryM.builder()
//                        .category(productDtoInputAll.getCategory())
//                        .name(productDtoInputAll.getCategoryM().getName())
//                .build());

        Product product = iProductRepository.save(Product.builder()
                .name(productDtoInputAll.getName())
                .regularPrice(productDtoInputAll.getRegularPrice())
                .discountPrice(productDtoInputAll.getDiscountPrice())
                .shippingFee(productDtoInputAll.getShippingFee())
                .discountRate(productDtoInputAll.getDiscountRate())
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
                        .categoryM(productDtoInputAll.getCategoryM())
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

        CategoryProductList categoryProductList = iCategoryProductListRepository.save(CategoryProductList.builder()
                .product(iProductRepository.findById(product.getId()).get())
                .category(iCategoryRepository.findById(productDtoInputAll.getCategory().getId()).get())
                .categoryM(iCategoryMRepository.findById(productDtoInputAll.getCategoryM().getId()).get())
                .build());




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
                            .discountRate(productDtoInputAll.getDiscountRate())
                            .shippingFee(productDtoInputAll.getShippingFee())
//                            .stockQuantity(productDtoInputAll.getStockQuantity())
                            .detail(productDtoInputAll.getDetail())
                            .deliveryCondition(productDtoInputAll.getDeliveryCondition())
                            .brandName(productDtoInputAll.getBrandName())
//                            .optionList(productDtoInputAll.getOptionList())
                            .titleImgUrl(productDtoInputAll.getTitleImgUrl())
                            .titleImgTxt(productDtoInputAll.getTitleImgTxt())
                            .categoryM(productDtoInputAll.getCategoryM())
                            .build()
            );
        }
        throw new Error(id + "번 상품이 존재하지 않습니다.");
    }

    // 3-1. 상품 전체 조회하기 (전체 컬럼)
    @Override
    public List<ProductDtoOutputAll> getProductAll() {

        List<Product> productList = iProductRepository.findAll();
        List<ProductDtoOutputAll> productDtoOutputAllList = new ArrayList<>();


        productList.forEach(
                product -> {

                    // ProductSubImg
                    List<ProductSubImg> productSubImgList = iProductSubImgRepository.findAllByProductId(product.getId());
                    List<ProductSubImgDtoOutputOnlyId> productSubImgDtoOutputOnlyIds = new ArrayList<>();

                    productSubImgList.forEach(productSubImg -> {
                        productSubImgDtoOutputOnlyIds.add(
                                ProductSubImgDtoOutputOnlyId.builder()
                                        .id(productSubImg.getId())
                                        .build()
                        );
                    });

                    // Stock
                    List<Stock> stockList = iStockRepository.findAllByProductId(product.getId());
                    List<StockDtoOutputProductIdName> stockDtoOutputProductIdNameList = new ArrayList<>();
                    stockList.forEach(stock -> {
                        stockDtoOutputProductIdNameList.add(
                                StockDtoOutputProductIdName.builder()
                                        .id(stock.getId())
                                        .qty(stock.getQty())
                                        .productId(stock.getProduct().getId())
                                        .optionFirstId(stock.getOptionFirst().getId())
                                        .optionSecondId(stock.getOptionSecond().getId())
                                        .build()
                        );
                    });

                    // CategoryProductList
                    List<CategoryProductList> categoryProductListList = iCategoryProductListRepository.findAllByProductId(product.getId());
                    List<CategoryProductListDtoOutput> categoryProductListDtoOutputList = new ArrayList<>();
                    categoryProductListList.forEach(categoryProductList -> {
                        categoryProductListDtoOutputList.add(
                                CategoryProductListDtoOutput.builder()
                                        .id(categoryProductList.getId())
                                        .productId(categoryProductList.getProduct().getId())
                                        .categoryId(categoryProductList.getCategory().getId())
                                        .categoryMId(categoryProductList.getCategoryM().getId())
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
                                    .productSubImgList(productSubImgDtoOutputOnlyIds)
//                                    .productSubImgList(iProductSubImgRepository.findAllByProductId(product.getId())) // 수정 필요
                                    .stockList(stockDtoOutputProductIdNameList)
//                                    .stockList(iStockRepository.findAllByProductId(product.getId()))
                                    .categoryProductList(categoryProductListDtoOutputList)
//                                    .categoryProductList(iCategoryProductListRepository.findAllByProductId(product.getId()))
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
                            .discountRate(product.getDiscountRate())
                            .shippingFee(product.getShippingFee())
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

    // 3-3. 상품 전체 조회하기 (페이지)
    @Override
    public Page<ProductDtoOutputAll> getProductAllPage(Pageable pageable) {

        return iProductRepository.findAll(pageable)
                .map(product ->
                        {
                            List<ProductSubImg> productSubImgList = iProductSubImgRepository.findAllByProductId(product.getId());
                            List<ProductSubImgDtoOutputOnlyId> productSubImgDtoOutputOnlyIds = new ArrayList<>();

                            productSubImgList.forEach(productSubImg -> {
                                productSubImgDtoOutputOnlyIds.add(
                                        ProductSubImgDtoOutputOnlyId.builder()
                                                .id(productSubImg.getId())
                                                .build()
                                );
                            });

                            // Stock
                            List<Stock> stockList = iStockRepository.findAllByProductId(product.getId());
                            List<StockDtoOutputProductIdName> stockDtoOutputProductIdNameList = new ArrayList<>();
                            stockList.forEach(stock -> {
                                stockDtoOutputProductIdNameList.add(
                                        StockDtoOutputProductIdName.builder()
                                                .id(stock.getId())
                                                .qty(stock.getQty())
                                                .productId(stock.getProduct().getId())
                                                .optionFirstId(stock.getOptionFirst().getId())
                                                .optionSecondId(stock.getOptionSecond().getId())
                                                .build()
                                );
                            });

                            // CategoryProductList
                            List<CategoryProductList> categoryProductListList = iCategoryProductListRepository.findAllByProductId(product.getId());
                            List<CategoryProductListDtoOutput> categoryProductListDtoOutputList = new ArrayList<>();
                            categoryProductListList.forEach(categoryProductList -> {
                                categoryProductListDtoOutputList.add(
                                        CategoryProductListDtoOutput.builder()
                                                .id(categoryProductList.getId())
                                                .productId(categoryProductList.getProduct().getId())
                                                .categoryId(categoryProductList.getCategory().getId())
                                                .categoryMId(categoryProductList.getCategoryM().getId())
                                                .build()
                                );
                            });

                            return ProductDtoOutputAll.builder()
                                    .id(product.getId())
                                    .name(product.getName())
                                    .regularPrice(product.getRegularPrice())
                                    .discountPrice(product.getDiscountPrice())
                                    .discountRate(product.getDiscountRate())
                                    .shippingFee(product.getShippingFee())
                                    .star(product.getStar())
                                    .detail(product.getDetail())
                                    .deliveryCondition(product.getDeliveryCondition())
                                    .viewCount(product.getViewCount())
                                    .sellCount(product.getSellCount())
                                    .brandName(product.getBrandName())
                                    .titleImgUrl(product.getTitleImgUrl())
                                    .titleImgTxt(product.getTitleImgTxt())
                                    .productSubImgList(productSubImgDtoOutputOnlyIds)
                                    .categoryProductList(categoryProductListDtoOutputList)
                                    .stockList(stockDtoOutputProductIdNameList)
                                    .build();
                        }
                );
    }

    // 3-3. 상품 전체 조회하기 (슬라이스)
    @Override
    public Slice<ProductDtoOutputAll> getProductAllSlice(Pageable pageable) {
        return iProductRepository.findAll(pageable)
                .map(product ->
                        {
                            List<ProductSubImg> productSubImgList = iProductSubImgRepository.findAllByProductId(product.getId());
                            List<ProductSubImgDtoOutputOnlyId> productSubImgDtoOutputOnlyIds = new ArrayList<>();

                            productSubImgList.forEach(productSubImg -> {
                                productSubImgDtoOutputOnlyIds.add(
                                        ProductSubImgDtoOutputOnlyId.builder()
                                                .id(productSubImg.getId())
                                                .build()
                                );
                            });

                            // Stock
                            List<Stock> stockList = iStockRepository.findAllByProductId(product.getId());
                            List<StockDtoOutputProductIdName> stockDtoOutputProductIdNameList = new ArrayList<>();
                            stockList.forEach(stock -> {
                                stockDtoOutputProductIdNameList.add(
                                        StockDtoOutputProductIdName.builder()
                                                .id(stock.getId())
                                                .qty(stock.getQty())
                                                .productId(stock.getProduct().getId())
                                                .optionFirstId(stock.getOptionFirst().getId())
                                                .optionSecondId(stock.getOptionSecond().getId())
                                                .build()
                                );
                            });

                            // CategoryProductList
                            List<CategoryProductList> categoryProductListList = iCategoryProductListRepository.findAllByProductId(product.getId());
                            List<CategoryProductListDtoOutput> categoryProductListDtoOutputList = new ArrayList<>();
                            categoryProductListList.forEach(categoryProductList -> {
                                categoryProductListDtoOutputList.add(
                                        CategoryProductListDtoOutput.builder()
                                                .id(categoryProductList.getId())
                                                .productId(categoryProductList.getProduct().getId())
                                                .categoryId(categoryProductList.getCategory().getId())
                                                .categoryMId(categoryProductList.getCategoryM().getId())
                                                .build()
                                );
                            });

                            return ProductDtoOutputAll.builder()
                                    .id(product.getId())
                                    .name(product.getName())
                                    .regularPrice(product.getRegularPrice())
                                    .discountPrice(product.getDiscountPrice())
                                    .discountRate(product.getDiscountRate())
                                    .shippingFee(product.getShippingFee())
                                    .star(product.getStar())
                                    .detail(product.getDetail())
                                    .deliveryCondition(product.getDeliveryCondition())
                                    .viewCount(product.getViewCount())
                                    .sellCount(product.getSellCount())
                                    .brandName(product.getBrandName())
                                    .titleImgUrl(product.getTitleImgUrl())
                                    .titleImgTxt(product.getTitleImgTxt())
                                    .productSubImgList(productSubImgDtoOutputOnlyIds)
                                    .categoryProductList(categoryProductListDtoOutputList)
                                    .stockList(stockDtoOutputProductIdNameList)
                                    .build();
                        }
                );
    }

    // 4. 상품 단일 조회하기
    @Override
    public ProductDtoOutputAllDetail getProductOne(Long productId) {
        Optional<Product> product = iProductRepository.findById(productId);

        if(product.isPresent()){

            // viewCount 증가
            Product saveProduct = iProductRepository.save(
                    Product.builder()
                            .id(product.get().getId())
                            .name(product.get().getName())
                            .regularPrice(product.get().getRegularPrice())
                            .discountPrice(product.get().getDiscountPrice())
                            .discountRate(product.get().getDiscountRate())
                            .shippingFee(product.get().getShippingFee())
                            .detail(product.get().getDetail())
                            .deliveryCondition(product.get().getDeliveryCondition())
                            .brandName(product.get().getBrandName())
                            .titleImgUrl(product.get().getTitleImgUrl())
                            .titleImgTxt(product.get().getTitleImgTxt())
                            .viewCount(product.get().getViewCount()+1)
                            .categoryM(product.get().getCategoryM())
                            .build()
            );

            System.out.println("getViewCount() : " + product.get().getViewCount());

            // ProductSubImg
            List<ProductSubImg> productSubImgList = iProductSubImgRepository.findAllByProductId(product.get().getId());
            List<ProductSubImgDtoOutputOnlyId> productSubImgDtoOutputOnlyIdList = new ArrayList<>();
            productSubImgList.forEach(productSubImg -> {
                productSubImgDtoOutputOnlyIdList.add(
                        ProductSubImgDtoOutputOnlyId.builder()
                                .id(productSubImg.getId())
                                .build()
                );
            });

            // CategoryProductList
            List<CategoryProductList> categoryProductLists = iCategoryProductListRepository.findAllByProductId(product.get().getId());
            List<CategoryProductListDtoOutput> categoryProductListDtoOutputList = new ArrayList<>();
            categoryProductLists.forEach(categoryProductList -> {
                categoryProductListDtoOutputList.add(
                        CategoryProductListDtoOutput.builder()
                                .id(categoryProductList.getId())
                                .productId(categoryProductList.getProduct().getId())
                                .categoryId(categoryProductList.getCategory().getId())
                                .categoryMId(categoryProductList.getCategoryM().getId())
                                .build()
                );
            });

            // Stock
            List<Stock> stockList = iStockRepository.findAllByProductId(product.get().getId());
            List<StockDtoOutputProductIdName> stockDtoOutputProductIdNameList = new ArrayList<>();
            stockList.forEach(stock -> {
                stockDtoOutputProductIdNameList.add(
                        StockDtoOutputProductIdName.builder()
                                .id(stock.getId())
                                .qty(stock.getQty())
                                .productId(stock.getProduct().getId())
                                .optionFirstId(stock.getOptionFirst().getId())
                                .optionSecondId(stock.getOptionSecond().getId())
                                .build()
                );
            });

            // Review
            List<Review> reviewList = iReviewRepository.findAllByProductId(product.get().getId());
            List<ReviewDtoOutputDetail> reviewDtoOutputDetailList = new ArrayList<>();
            reviewList.forEach(review -> {
                reviewDtoOutputDetailList.add(
                        ReviewDtoOutputDetail.builder()
                                .id(review.getId())
                                .content(review.getContent())
                                .title(review.getTitle())
                                .imgUrl(review.getImgUrl())
                                .imgUrl2(review.getImgUrl2())
                                .createdDate(review.getCreatedDate())
                                .orderItemId(review.getOrderItem().getId())
                                .userId(review.getUser().getId())
                                .build()
                );
            });

            return ProductDtoOutputAllDetail.builder()
                    .id(productId)
                    .name(product.get().getName())
                    .star(product.get().getStar())
                    .discountPrice(product.get().getDiscountPrice())
                    .discountRate(product.get().getDiscountRate())
                    .shippingFee(product.get().getShippingFee())
                    .titleImgTxt(product.get().getTitleImgTxt())
                    .titleImgUrl(product.get().getTitleImgUrl())
                    .brandName(product.get().getBrandName())
                    .sellCount(product.get().getSellCount())
                    .viewCount(product.get().getViewCount())
                    .deliveryCondition(product.get().getDeliveryCondition())
                    .detail(product.get().getDetail())
                    .regularPrice(product.get().getRegularPrice())
//                    .categoryProductList(iCategoryProductListRepository.findAllByProductId(product.get().getId()))
                    .categoryProductList(categoryProductListDtoOutputList)
//                    .productSubImgList(iProductSubImgRepository.findAllByProductId(product.get().getId()))
                    .productSubImgList(productSubImgDtoOutputOnlyIdList)
//                    .stockList(iStockRepository.findAllByProductId(product.get().getId()))
                    .stockList(stockDtoOutputProductIdNameList)
                    .reviewList(reviewDtoOutputDetailList)
                    .build();
        }

        throw new Error(productId + "번 상품이 존재하지 않습니다.");
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

        List<Stock> stockList = iStockRepository.findAllByProductId(productDtoOutputIdName.getId());
        List<StockDtoOutputProductIdName> stockDtoOutputProductIdNameList = new ArrayList<>();
        stockList.forEach(stock -> {
            stockDtoOutputProductIdNameList.add(
                    StockDtoOutputProductIdName.builder()
                            .id(stock.getId())
                            .qty(stock.getQty())
                            .optionFirstId(stock.getOptionFirst().getId())
                            .optionSecondId(stock.getOptionSecond().getId())
                            .productId(stock.getProduct().getId())
                            .build()
            );
        });

        return ProductDtoOutputStockByProductId.builder()
                .id(product.get().getId())
                .stock(stockDtoOutputProductIdNameList)
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

    // 7. 상품 검색하기 (페이징 X)
//    @Override
//    public List<ProductDtoOutputAll> getSearchNameList(String keyword) {
//
//        List<Product> productList = iProductRepository.findByNameContaining(keyword);
//        List<ProductDtoOutputAll> productDtoOutputAllList = new ArrayList<>();
//
//        productList.forEach(product -> {
//
//            List<ProductSubImg> allByProductId = iProductSubImgRepository.findAllByProductId(product.getId());
//            List<ProductSubImgDtoOutputOnlyId> productSubImgDtoOutputOnlyIdList = new ArrayList<>();
//            allByProductId.forEach(productSubImg -> {
//                productSubImgDtoOutputOnlyIdList.add(
//                        ProductSubImgDtoOutputOnlyId.builder()
//                                .id(productSubImg.getId())
//                                .build()
//                );
//            });
//
//            List<CategoryProductList> categoryProductLists = iCategoryProductListRepository.findAllByProductId(product.getId());
//            List<CategoryProductListDtoOutput> categoryProductListDtoOutputList = new ArrayList<>();
//            categoryProductLists.forEach(categoryProductList -> {
//                categoryProductListDtoOutputList.add(
//                        CategoryProductListDtoOutput.builder()
//                                .id(categoryProductList.getId())
//                                .productId(categoryProductList.getId())
//                                .categoryId(categoryProductList.getCategory().getId())
//                                .categoryMId(categoryProductList.getCategoryM().getId())
//                                .build()
//                );
//            });
//
//            List<Stock> stockList = iStockRepository.findAllByProductId(product.getId());
//            List<StockDtoOutputOnlyId> stockDtoOutputOnlyIdList = new ArrayList<>();
//            stockList.forEach(stock -> {
//                stockDtoOutputOnlyIdList.add(
//                        StockDtoOutputOnlyId.builder()
//                                .id(stock.getId())
//                                .build()
//                );
//            });
//
//            productDtoOutputAllList.add(
//                    ProductDtoOutputAll.builder()
//                            .id(product.getId())
//                            .name(product.getName())
//                            .regularPrice(product.getRegularPrice())
//                            .discountPrice(product.getDiscountPrice())
//                            .discountRate(product.getDiscountRate())
//                            .shippingFee(product.getShippingFee())
//                            .detail(product.getDetail())
//                            .deliveryCondition(product.getDeliveryCondition())
//                            .sellCount(product.getSellCount())
//                            .viewCount(product.getViewCount())
//                            .titleImgUrl(product.getTitleImgUrl())
//                            .titleImgTxt(product.getTitleImgTxt())
//                            .brandName(product.getBrandName())
//                            .star(product.getStar())
//                            .productSubImgList(productSubImgDtoOutputOnlyIdList)
//                            .categoryProductList(categoryProductListDtoOutputList)
//                            .stockList(stockDtoOutputOnlyIdList)
//                            .build()
//            );
//        });
//
//        return productDtoOutputAllList;
//    }

    // 7-1. 상품 검색하기 (페이징) - 이름만
    @Override
    public Page<ProductDtoOutputAll> getSearchNameListPage(String query, Pageable pageable) {
        Page<Product> productPage = iProductRepository.findByNameContaining(query, pageable);
        return productPage.map(product -> {

            List<ProductSubImg> allByProductId = iProductSubImgRepository.findAllByProductId(product.getId());
            List<ProductSubImgDtoOutputOnlyId> productSubImgDtoOutputOnlyIdList = new ArrayList<>();
            allByProductId.forEach(productSubImg -> {
                productSubImgDtoOutputOnlyIdList.add(
                        ProductSubImgDtoOutputOnlyId.builder()
                                .id(productSubImg.getId())
                                .build()
                );
            });

            List<CategoryProductList> categoryProductLists = iCategoryProductListRepository.findAllByProductId(product.getId());
            List<CategoryProductListDtoOutput> categoryProductListDtoOutputList = new ArrayList<>();
            categoryProductLists.forEach(categoryProductList -> {
                categoryProductListDtoOutputList.add(
                        CategoryProductListDtoOutput.builder()
                                .id(categoryProductList.getId())
                                .productId(categoryProductList.getId())
                                .categoryId(categoryProductList.getCategory().getId())
                                .categoryMId(categoryProductList.getCategoryM().getId())
                                .build()
                );
            });

            List<Stock> stockList = iStockRepository.findAllByProductId(product.getId());
            List<StockDtoOutputProductIdName> stockDtoOutputProductIdNameList = new ArrayList<>();
            stockList.forEach(stock -> {
                stockDtoOutputProductIdNameList.add(
                        StockDtoOutputProductIdName.builder()
                                .id(stock.getId())
                                .qty(stock.getQty())
                                .productId(stock.getProduct().getId())
                                .optionFirstId(stock.getOptionFirst().getId())
                                .optionSecondId(stock.getOptionSecond().getId())
                                .build()
                );
            });

            return ProductDtoOutputAll.builder()
                    .id(product.getId())
                    .name(product.getName())
                    .regularPrice(product.getRegularPrice())
                    .discountPrice(product.getDiscountPrice())
                    .discountRate(product.getDiscountRate())
                    .shippingFee(product.getShippingFee())
                    .detail(product.getDetail())
                    .deliveryCondition(product.getDeliveryCondition())
                    .sellCount(product.getSellCount())
                    .viewCount(product.getViewCount())
                    .titleImgUrl(product.getTitleImgUrl())
                    .titleImgTxt(product.getTitleImgTxt())
                    .brandName(product.getBrandName())
                    .star(product.getStar())
                    .productSubImgList(productSubImgDtoOutputOnlyIdList)
                    .categoryProductList(categoryProductListDtoOutputList)
                    .stockList(stockDtoOutputProductIdNameList)
                    .build();
        });
    }

    // 7-2. 상품 검색하기 (페이징) - 이름, 카테고리 중분류 id
    @Override
    public Page<ProductDtoOutputAll> getSearchNameAndCategoryMIdListPage(String query, Long id, Pageable pageable) {
        Page<Product> productPage = iProductRepository.findByNameContainingAndCategoryMId(query, id, pageable);
        return productPage.map(product -> {

            List<ProductSubImg> allByProductId = iProductSubImgRepository.findAllByProductId(product.getId());
            List<ProductSubImgDtoOutputOnlyId> productSubImgDtoOutputOnlyIdList = new ArrayList<>();
            allByProductId.forEach(productSubImg -> {
                productSubImgDtoOutputOnlyIdList.add(
                        ProductSubImgDtoOutputOnlyId.builder()
                                .id(productSubImg.getId())
                                .build()
                );
            });

            List<CategoryProductList> categoryProductLists = iCategoryProductListRepository.findAllByProductId(product.getId());
            List<CategoryProductListDtoOutput> categoryProductListDtoOutputList = new ArrayList<>();
            categoryProductLists.forEach(categoryProductList -> {
                categoryProductListDtoOutputList.add(
                        CategoryProductListDtoOutput.builder()
                                .id(categoryProductList.getId())
                                .productId(categoryProductList.getId())
                                .categoryId(categoryProductList.getCategory().getId())
                                .categoryMId(categoryProductList.getCategoryM().getId())
                                .build()
                );
            });

            List<Stock> stockList = iStockRepository.findAllByProductId(product.getId());
            List<StockDtoOutputProductIdName> stockDtoOutputProductIdNameList = new ArrayList<>();
            stockList.forEach(stock -> {
                stockDtoOutputProductIdNameList.add(
                        StockDtoOutputProductIdName.builder()
                                .id(stock.getId())
                                .qty(stock.getQty())
                                .productId(stock.getProduct().getId())
                                .optionFirstId(stock.getOptionFirst().getId())
                                .optionSecondId(stock.getOptionSecond().getId())
                                .build()
                );
            });

            return ProductDtoOutputAll.builder()
                    .id(product.getId())
                    .name(product.getName())
                    .regularPrice(product.getRegularPrice())
                    .discountPrice(product.getDiscountPrice())
                    .discountRate(product.getDiscountRate())
                    .shippingFee(product.getShippingFee())
                    .detail(product.getDetail())
                    .deliveryCondition(product.getDeliveryCondition())
                    .sellCount(product.getSellCount())
                    .viewCount(product.getViewCount())
                    .titleImgUrl(product.getTitleImgUrl())
                    .titleImgTxt(product.getTitleImgTxt())
                    .brandName(product.getBrandName())
                    .star(product.getStar())
                    .productSubImgList(productSubImgDtoOutputOnlyIdList)
                    .categoryProductList(categoryProductListDtoOutputList)
                    .stockList(stockDtoOutputProductIdNameList)
                    .build();
        });
    }

    // 7-3. 상품 검색하기 (페이징) - 이름, 가격대
    @Override
    public Page<ProductDtoOutputAll> getSearchNameAndBetweenDiscountPrice(
            String query, int minPrice, int maxPrice, Pageable pageable) {
        Page<Product> productPage = iProductRepository.findByNameContainingAndDiscountPriceBetween(query, minPrice, maxPrice, pageable);
        return productPage.map(product -> {

            List<ProductSubImg> allByProductId = iProductSubImgRepository.findAllByProductId(product.getId());
            List<ProductSubImgDtoOutputOnlyId> productSubImgDtoOutputOnlyIdList = new ArrayList<>();
            allByProductId.forEach(productSubImg -> {
                productSubImgDtoOutputOnlyIdList.add(
                        ProductSubImgDtoOutputOnlyId.builder()
                                .id(productSubImg.getId())
                                .build()
                );
            });

            List<CategoryProductList> categoryProductLists = iCategoryProductListRepository.findAllByProductId(product.getId());
            List<CategoryProductListDtoOutput> categoryProductListDtoOutputList = new ArrayList<>();
            categoryProductLists.forEach(categoryProductList -> {
                categoryProductListDtoOutputList.add(
                        CategoryProductListDtoOutput.builder()
                                .id(categoryProductList.getId())
                                .productId(categoryProductList.getId())
                                .categoryId(categoryProductList.getCategory().getId())
                                .categoryMId(categoryProductList.getCategoryM().getId())
                                .build()
                );
            });

            List<Stock> stockList = iStockRepository.findAllByProductId(product.getId());
            List<StockDtoOutputProductIdName> stockDtoOutputProductIdNameList = new ArrayList<>();
            stockList.forEach(stock -> {
                stockDtoOutputProductIdNameList.add(
                        StockDtoOutputProductIdName.builder()
                                .id(stock.getId())
                                .qty(stock.getQty())
                                .productId(stock.getProduct().getId())
                                .optionFirstId(stock.getOptionFirst().getId())
                                .optionSecondId(stock.getOptionSecond().getId())
                                .build()
                );
            });

            return ProductDtoOutputAll.builder()
                    .id(product.getId())
                    .name(product.getName())
                    .regularPrice(product.getRegularPrice())
                    .discountPrice(product.getDiscountPrice())
                    .discountRate(product.getDiscountRate())
                    .shippingFee(product.getShippingFee())
                    .detail(product.getDetail())
                    .deliveryCondition(product.getDeliveryCondition())
                    .sellCount(product.getSellCount())
                    .viewCount(product.getViewCount())
                    .titleImgUrl(product.getTitleImgUrl())
                    .titleImgTxt(product.getTitleImgTxt())
                    .brandName(product.getBrandName())
                    .star(product.getStar())
                    .productSubImgList(productSubImgDtoOutputOnlyIdList)
                    .categoryProductList(categoryProductListDtoOutputList)
                    .stockList(stockDtoOutputProductIdNameList)
                    .build();
        });
    }
}

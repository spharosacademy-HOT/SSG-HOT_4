package com.ssghot.ssg.recentlyViewedProduct.service;

import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.repository.IProductRepository;
import com.ssghot.ssg.recentlyViewedProduct.domain.RecentlyViewedProduct;
import com.ssghot.ssg.recentlyViewedProduct.dto.RecentlyViewedProductDtoInput;
import com.ssghot.ssg.recentlyViewedProduct.dto.RecentlyViewedProductDtoOutput;
import com.ssghot.ssg.recentlyViewedProduct.repository.IRecentlyViewedProductRepository;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RecentlyViewedProductServiceImple implements IRecentlyViewedProductService{

    private final IRecentlyViewedProductRepository iRecentlyViewedProductRepository;
    private final IUserRepository iUserRepository;

    private final IProductRepository iProductRepository;

    /*
        1. 최근 본 상품 등록하기
        2. 최근 본 상품 삭제하기
        3. 최근 본 상품 전체 조회하기
     */

    // 1. 최근 본 상품 등록하기
    @Override
    public RecentlyViewedProduct addRecentlyViewedProduct(RecentlyViewedProductDtoInput recentlyViewedProductDtoInput) {

        Optional<Product> product = iProductRepository.findById(recentlyViewedProductDtoInput.getProduct().getId());
        Optional<User> user = iUserRepository.findById(recentlyViewedProductDtoInput.getUser().getId());

        List<RecentlyViewedProduct> recentlyViewedProductList = iRecentlyViewedProductRepository.findAll(); // RVP 리스트 조회
        int rvpListSize = recentlyViewedProductList.size(); // RVP 리스트 사이즈 조회
        System.out.println("rvpListSize = " + rvpListSize);
        Long maxId = recentlyViewedProductList.get(rvpListSize-1).getId(); // RVP 리스트의 마지막 ID 번호 조회
        System.out.println("maxId = " + maxId);
        int size = 0;

        // boolean[] check 배열의 크기 설정
        if(rvpListSize >= maxId){
            size = rvpListSize;
        } else {
            size = Math.toIntExact(maxId);
        }
        System.out.println("size = " + size);
        boolean[] check = new boolean[size];

        recentlyViewedProductList.forEach(recentlyViewedProduct -> {
            Long id = recentlyViewedProduct.getProduct().getId(); // product 아이디 조회
            System.out.println("recentlyViewedProduct.getProduct().getId() = " + id);
            System.out.println("check[Math.toIntExact(id)] = " + check[Math.toIntExact(id)]);
            if(product.isPresent() && user.isPresent() && check[Math.toIntExact(id)] == false) {
                check[Math.toIntExact(id)] = true;
                System.out.println("check[Math.toIntExact(id)] = " + check[Math.toIntExact(id)]);

            }
        });

        RecentlyViewedProduct byProductId = iRecentlyViewedProductRepository.findByProductId(product.get().getId());
        String byProductIdIsDeleted = byProductId.getIsDeleted();
        Long productId = byProductId.getProduct().getId();

        System.out.println("productId = " + productId);
        System.out.println("byProductIdIsDeleted = " + byProductIdIsDeleted);
        System.out.println("check[Math.toIntExact(productId)] = " + check[Math.toIntExact(productId)]);
        System.out.println("product.isPresent() = " + product.isPresent());
        System.out.println("user.isPresent() = " + user.isPresent());

        System.out.println("(check[Math.toIntExact(productId)] == true) = " + (check[Math.toIntExact(productId)] == true));
        System.out.println("byProductIdIsDeleted = Y : " + byProductIdIsDeleted.equals("Y"));
        System.out.println(product.isPresent() && user.isPresent() && check[Math.toIntExact(productId)] == true && byProductIdIsDeleted == "Y");
        if(product.isPresent() && user.isPresent() && check[Math.toIntExact(productId)] == false) {
            System.out.println("위 실행됨");
            RecentlyViewedProduct recentlyViewedProduct1 = iRecentlyViewedProductRepository.save(
                    RecentlyViewedProduct.builder()
                            .product(recentlyViewedProductDtoInput.getProduct())
                            .user(recentlyViewedProductDtoInput.getUser())
                            .isDeleted("N")
                            .build()
            );
        } else if (product.isPresent() && user.isPresent()
                && check[Math.toIntExact(productId)] == true
                && byProductIdIsDeleted.equals("Y")){
            System.out.println(" 아래 실행됨 ");
            RecentlyViewedProduct recentlyViewedProduct1 = iRecentlyViewedProductRepository.save(
                    RecentlyViewedProduct.builder()
                            .product(recentlyViewedProductDtoInput.getProduct())
                            .user(recentlyViewedProductDtoInput.getUser())
                            .isDeleted("N")
                            .build()
            );
        }

//        if(product.isPresent() && user.isPresent()) {
//            RecentlyViewedProduct recentlyViewedProduct = iRecentlyViewedProductRepository.save(
//                    RecentlyViewedProduct.builder()
//                            .product(recentlyViewedProductDtoInput.getProduct())
//                            .user(recentlyViewedProductDtoInput.getUser())
//                            .isDeleted("N")
//                            .build()
//            );
//
//            return recentlyViewedProduct;
//        }
        return null;
    }

    // 2. 최근 본 상품 삭제하기
    @Override
    public RecentlyViewedProduct deleteRecentlyViewedProduct(Long id) {
        Optional<RecentlyViewedProduct> recentlyViewedProduct = iRecentlyViewedProductRepository.findById(id);

        if(recentlyViewedProduct.isPresent()){
            return iRecentlyViewedProductRepository.save(
                    RecentlyViewedProduct.builder()
                            .id(id)
                            .isDeleted("Y")
                            .product(recentlyViewedProduct.get().getProduct())
                            .user(recentlyViewedProduct.get().getUser())
                            .build()
            );
        }
        return null;
    }

    // 3-1. 최근 본 상품 전체 조회하기 (슬라이스 적용 X)
    @Override
    public List<RecentlyViewedProductDtoOutput> getAllRecentlyViewedProduct() {
        List<RecentlyViewedProduct> recentlyViewedProductList = iRecentlyViewedProductRepository.findAll();
        List<RecentlyViewedProductDtoOutput> recentlyViewedProductDtoOutputList = new ArrayList<>();

        // 상품 중복 제거
        int size = recentlyViewedProductList.size();
        System.out.println("size = " + size);
        boolean check[] = new boolean[size+1];
        System.out.println("check[1] = " + check[1]);

        recentlyViewedProductList.forEach(
                recentlyViewedProduct -> {

//                    List<Product> allByRecentlyViewedProductId = iProductRepository.findAllByRecentlyViewedProductId(recentlyViewedProduct.getId());
//                    List<ProductDtoOutputIdName> productDtoOutputAllList = new ArrayList<>();
//                    allByRecentlyViewedProductId.forEach(product -> {
//                        productDtoOutputAllList.add(
//                                ProductDtoOutputAll.builder()
//                                        .name(product.getName())
//                                        .discountPrice(product.getDiscountPrice())
//                                        .titleImgUrl(product.getTitleImgUrl())
//                                        .build()
//                        );
//                    });

                    System.out.println("recentlyViewedProduct.getId() = " + recentlyViewedProduct.getId());
                    int productid = Math.toIntExact(recentlyViewedProduct.getProduct().getId());
                    System.out.println("productid = " + Math.toIntExact(productid));
                    System.out.println("check[" + productid + "] = " + check[productid]);
                    if(check[productid] == false && recentlyViewedProduct.getIsDeleted().equals("N")){ //
                        System.out.println("check[" + productid + "] = " + check[productid]);
                        check[productid] = true;
                        System.out.println("check[" + productid + "] = " + check[productid]);
                        recentlyViewedProductDtoOutputList.add(
                                RecentlyViewedProductDtoOutput.builder()
                                        .id(recentlyViewedProduct.getId())
                                        .product(recentlyViewedProduct.getProduct())
                                        .userId(recentlyViewedProduct.getUser().getId())
                                        .isDeleted(recentlyViewedProduct.getIsDeleted())
                                        .build()
                        );
//                        System.out.println(recentlyViewedProductDtoOutputList.get(0));
                    }


//                    if(recentlyViewedProduct.getIsDeleted().equals("N")){
//                        recentlyViewedProductDtoOutputList.add(
//                                RecentlyViewedProductDtoOutput.builder()
//                                        .id(recentlyViewedProduct.getId())
//                                        .product(recentlyViewedProduct.getProduct())
//                                        .userId(recentlyViewedProduct.getUser().getId())
//                                        .isDeleted(recentlyViewedProduct.getIsDeleted())
//                                        .build()
//                        );
//                    }
                }
        );
        return recentlyViewedProductDtoOutputList;
    }

    // 3-2. 최근 본 상품 전체 조회하기 (슬라이스 적용 O)
    @Override
    public Slice<RecentlyViewedProductDtoOutput> getAllRecentlyViewedProductSlice(String keyword, Pageable pageable) {
        Page<RecentlyViewedProduct> all = iRecentlyViewedProductRepository.findByIsDeleted(keyword, pageable);

        return all.map(recentlyViewedProduct ->
                 RecentlyViewedProductDtoOutput.builder()
                        .id(recentlyViewedProduct.getId())
                        .product(recentlyViewedProduct.getProduct())
                        .userId(recentlyViewedProduct.getUser().getId())
                        .isDeleted(recentlyViewedProduct.getIsDeleted())
                        .build()
       );

        // Page -> List, List -> page 시도 실패
//        List<RecentlyViewedProduct> all = (List<RecentlyViewedProduct>) iRecentlyViewedProductRepository.findAll(pageable);
//        List<RecentlyViewedProductDtoOutput> recentlyViewedProductDtoOutputList = new ArrayList<>();
//
//        all.forEach(recentlyViewedProduct -> {
//            if(recentlyViewedProduct.getIsDeleted().equals("N")) {
//                recentlyViewedProductDtoOutputList.add(
//                        RecentlyViewedProductDtoOutput.builder()
//                                .id(recentlyViewedProduct.getId())
//                                .userId(recentlyViewedProduct.getUser().getId())
//                                .product(recentlyViewedProduct.getProduct())
//                                .isDeleted(recentlyViewedProduct.getIsDeleted())
//                                .build()
//                );
//            }
//        });
//        Page<RecentlyViewedProductDtoOutput> recentlyViewedProductDtoOutputPage = (Page<RecentlyViewedProductDtoOutput>) recentlyViewedProductDtoOutputList;
//        return recentlyViewedProductDtoOutputPage;
    }
}

package com.ssghot.ssg.qna.service;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.product.domain.Product;
import com.ssghot.ssg.product.repository.IProductRepository;
import com.ssghot.ssg.qna.domain.Qna;
import com.ssghot.ssg.qna.dto.*;
import com.ssghot.ssg.qna.repository.IQnaRepository;
import com.ssghot.ssg.users.domain.User;
import com.ssghot.ssg.users.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

//@Slf4j
@RequiredArgsConstructor
@Service
public class QnaServiceImpl implements IQnaService{
    private final IUserRepository iUserRepository;
    private final IProductRepository iProductRepository;
    private final IQnaRepository iQnaRepository;
    @Override
    public ResultDtoOutput<QnaDtoOutput> addQna(QnaDtoInput qnaDtoInput) {
        Optional<User> user = iUserRepository.findById(qnaDtoInput.getUserId());
        Optional<Product> product = iProductRepository.findById(qnaDtoInput.getProductId());
        if(user.isPresent() && product.isPresent()){
            Qna qna = iQnaRepository.save(qnaDtoInput.toEntity(product.get(), user.get()));
            return getQnaDtoOutput(200,"qna가 생성되었습니다.",qna);
        }
        return getQnaDtoOutput(400,"qna가 생성되지 못하였습니다.",null);
    }

    @Override
    public ResultsDtoOutput<List<QnaDtoOutput>> getAll() {
        List<Qna> qnas = iQnaRepository.findAll();
        if(qnas.isEmpty()){
            return getQnaDtoOutputList(400,"qna 정보가 없습니다.", qnas);
        }
        return getQnaDtoOutputList(200,"qna 정보를 가져왔습니다.",qnas);
    }

    @Override
    public ResultsDtoOutput<List<QnaDtoOutput>> getQnaByProductId(Long productId) {
        List<Qna> allByProductId = iQnaRepository.findAllByProductIdAndParentId(productId,null);
        if(allByProductId.isEmpty()){
            return getQnaDtoOutputList(400,"해당 제폼의 qna가 존재하지 않습니다.",null);
        }
        return getQnaDtoOutputList(200,"해당 제품의 qna정보를 모두 가져왔습니다.",allByProductId);
    }

    @Override
    public Page<QnaDtoOutput> getQnaByProductId2(Long productId, Pageable pageable) {
        Page<Qna> qnaList = iQnaRepository.findAllByProductIdAndParentId(productId, null, pageable);

        return qnaList.map(qna -> {
            return QnaDtoOutput.builder()
                    .id(qna.getId())
                    .answer(qna.isAnswer())
                    .contents(qna.getContents())
                    .email(qna.getUser().getEmail())
                    .productId(qna.getProduct().getId())
                    .secret(qna.isSecret())
                    .phone(qna.getUser().getPhone())
                    .title(qna.getTitle())
                    .type(qna.getType())
                    .userId(qna.getUser().getId())
                    .createdDate(qna.getCreatedDate())
                    .updatedDate(qna.getUpdatedDate())
                    .children(qna.getChildren())
                    .build();
        });
    }

    @Override
    public ResultsDtoOutput<List<QnaDtoOutput>> getQnaByUserId(Long userId) {
        List<Qna> allByUserId = iQnaRepository.findAllByUserId(userId);
        if(allByUserId.isEmpty()){
            return getQnaDtoOutputList(400,"해당 유저의 qna가 존재하지 않습니다.",null);
        }
        return getQnaDtoOutputList(200,"해당 유저의 qna정보를 모두 가져왔습니다.",allByUserId);
    }

    @Override
    public ResultDtoOutput<QnaDtoOutput> getQnaById(Long id) {
        Optional<Qna> qna = iQnaRepository.findById(id);
        if(qna.isPresent()){
            return getQnaDtoOutput(200,"qna 정보를 가져왔습니다.",qna.get());
        }
        return getQnaDtoOutput(400,"qna 정보를 가져오지 못하였습니다.",null);
    }

    @Override
    public ResultDtoOutput<QnaDtoOutput> editQna(QnaEditDtoInput qnaEditDtoInput) {
        Optional<Qna> oldQna = iQnaRepository.findById(qnaEditDtoInput.getId());
        if(oldQna.isPresent()){
            if(oldQna.get().getUser().getId() == qnaEditDtoInput.getUserId()) {
                Qna newQna = iQnaRepository.save(qnaEditDtoInput.toEntity(oldQna.get()));
               return getQnaDtoOutput(200, "qna가 수정되었습니다.", newQna);
            }else{
               return getQnaDtoOutput(400,"qna를 작성한 유저정보와 같지 않습니다.",null);
            }
        }
        return getQnaDtoOutput(400,"qna가 수정되지 못했습니다.",null);
    }

    @Override
    public void deleteQna(Long id) {
        iQnaRepository.deleteById(id);
    }

    @Override
    public ResultDtoOutput<QnaAdminDtoOutput> addReply(QnaAdminDtoInput qnaAdminDtoInput) {
        Optional<User> user = iUserRepository.findById(qnaAdminDtoInput.getUserId());
        Optional<Qna> qna = iQnaRepository.findById(qnaAdminDtoInput.getQnaId());

        if(user.isPresent() && qna.isPresent()) {
            int result = iQnaRepository.updateAnswer(qna.get().getId());
            if(result>0) {
                Qna reply = iQnaRepository.save(qnaAdminDtoInput.toEntity(qna.get(), user.get(), qna.get().getProduct()));
                return new ResultDtoOutput<>(200, "success", QnaAdminDtoOutput.builder()
                        .contents(reply.getContents())
                        .parentId(reply.getParent().getId())
                        .createdDate(reply.getCreatedDate())
                        .id(reply.getId())
                        .title(reply.getTitle())
                        .updatedDate(reply.getUpdatedDate())
                        .build());
            }else{
                return new ResultDtoOutput(400,"답변을 달지 못하였습니다.",null);
            }
        }
        return null;
    }

    private ResultDtoOutput<QnaDtoOutput> getQnaDtoOutput(int status, String message, Qna qna){
        if(qna!=null){
            return new ResultDtoOutput<>(status,message,QnaDtoOutput.builder()
                    .id(qna.getId())
                    .answer(qna.isAnswer())
                    .contents(qna.getContents())
                    .email(qna.getUser().getEmail())
                    .productId(qna.getProduct().getId())
                    .phone(qna.getUser().getPhone())
                    .secret(qna.isSecret())
                    .title(qna.getTitle())
                    .type(qna.getType())
                    .userId(qna.getUser().getId())
                    .createdDate(qna.getCreatedDate())
                    .updatedDate(qna.getUpdatedDate())
                    .children(qna.getChildren())
                    .build());
        }
    return new ResultDtoOutput<>(status,message,null);
    }
    private ResultsDtoOutput<List<QnaDtoOutput>> getQnaDtoOutputList(int status, String message, List<Qna> qnas) {
        if (qnas != null) {
            List<QnaDtoOutput> collect = qnas.stream().map(qna ->
                    QnaDtoOutput.builder()
                            .id(qna.getId())
                            .answer(qna.isAnswer())
                            .contents(qna.getContents())
                            .email(qna.getUser().getEmail())
                            .productId(qna.getProduct().getId())
                            .secret(qna.isSecret())
                            .phone(qna.getUser().getPhone())
                            .title(qna.getTitle())
                            .type(qna.getType())
                            .userId(qna.getUser().getId())
                            .createdDate(qna.getCreatedDate())
                            .updatedDate(qna.getUpdatedDate())
                            .children(qna.getChildren())
                            .build()).collect(Collectors.toList());
            return new ResultsDtoOutput<>(status, message, collect.size(), collect);

           }
        return new ResultsDtoOutput<>(status,message,0,null);
     }


     // 페이지 적용
    private ResultsDtoOutput<List<QnaDtoOutput>> getQnaDtoOutputList2(int status, String message, List<Qna> qnas) {
        if (qnas != null) {
            List<QnaDtoOutput> collect = qnas.stream().map(qna ->
                    QnaDtoOutput.builder()
                            .id(qna.getId())
                            .answer(qna.isAnswer())
                            .contents(qna.getContents())
                            .email(qna.getUser().getEmail())
                            .productId(qna.getProduct().getId())
                            .secret(qna.isSecret())
                            .phone(qna.getUser().getPhone())
                            .title(qna.getTitle())
                            .type(qna.getType())
                            .userId(qna.getUser().getId())
                            .createdDate(qna.getCreatedDate())
                            .updatedDate(qna.getUpdatedDate())
                            .children(qna.getChildren())
                            .build()).collect(Collectors.toList());
            return new ResultsDtoOutput<>(status, message, collect.size(), collect);

        }
        return new ResultsDtoOutput<>(status,message,0,null);
    }
}

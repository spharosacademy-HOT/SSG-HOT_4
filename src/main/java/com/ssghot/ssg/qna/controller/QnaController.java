package com.ssghot.ssg.qna.controller;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.qna.dto.*;
import com.ssghot.ssg.qna.service.IQnaService;
import com.ssghot.ssg.users.sevice.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/qna")
@RequiredArgsConstructor
public class QnaController {
    private final IQnaService iQnaService;
    private final IUserService iUserService;

    @PostMapping
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultDtoOutput<QnaDtoOutput> addQna(@RequestBody QnaDtoInput qnaDtoInput, HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        qnaDtoInput.setUserId(userId);
        return iQnaService.addQna(qnaDtoInput);
    }
    @GetMapping
    public ResultsDtoOutput<List<QnaDtoOutput>> getAll(){
        return iQnaService.getAll();
    }

    @GetMapping("/{id}")
    public ResultDtoOutput<QnaDtoOutput> getQnaById(@PathVariable Long id){
        return iQnaService.getQnaById(id);
    }
    @GetMapping("/user")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultsDtoOutput<List<QnaDtoOutput>> getQnaListByUserId(HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        return iQnaService.getQnaByUserId(userId);
    }

    @GetMapping("/product/{id}")
    public ResultsDtoOutput<List<QnaDtoOutput>> getQnaListByProductId(@PathVariable Long id){
        return iQnaService.getQnaByProductId(id);
    }
    @PutMapping
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResultDtoOutput<QnaDtoOutput> editQna(@RequestBody QnaEditDtoInput qnaEditDtoInput,HttpServletRequest request){
        Long userId = iUserService.getUserByToken(request);
        qnaEditDtoInput.setUserId(userId);
        return iQnaService.editQna(qnaEditDtoInput);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteQna(@PathVariable Long id){
         iQnaService.deleteQna(id);
    }

    @PostMapping("/admin")
    public ResultDtoOutput<QnaAdminDtoOutput> addReply(@RequestBody QnaAdminDtoInput qnaAdminDtoInput){
        return iQnaService.addReply(qnaAdminDtoInput);
    }

}

package com.ssghot.ssg.qna.controller;

import com.ssghot.ssg.common.ResultDtoOutput;
import com.ssghot.ssg.common.ResultsDtoOutput;
import com.ssghot.ssg.qna.dto.*;
import com.ssghot.ssg.qna.service.IQnaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/qna")
@RequiredArgsConstructor
public class QnaController {
    private final IQnaService iQnaService;

    @PostMapping
    public ResultDtoOutput<QnaDtoOutput> addQna(@RequestBody QnaDtoInput qnaDtoInput){
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
    @GetMapping("/user/{id}")
    public ResultsDtoOutput<List<QnaDtoOutput>> getQnaListByUserId(@PathVariable Long id){
        return iQnaService.getQnaByUserId(id);
    }

    @GetMapping("/product/{id}")
    public ResultsDtoOutput<List<QnaDtoOutput>> getQnaListByProductId(@PathVariable Long id){
        return iQnaService.getQnaByProductId(id);
    }
    @PutMapping
    public ResultDtoOutput<QnaDtoOutput> editQna(@RequestBody QnaEditDtoInput qnaEditDtoInput){
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

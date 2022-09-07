package com.ssghot.ssg.s3.controller;

import com.ssghot.ssg.s3.service.S3Uploader;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/images")
public class S3Controller {
    private final S3Uploader s3Uploader;

    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Map<String,Object>> upload(@RequestPart(required = false) MultipartFile imgFile) throws IOException {
        String upload = s3Uploader.upload(imgFile, "");
        Map<String, Object> result = new HashMap<>();
        result.put("result",upload);
        return ResponseEntity.ok().body(result);
    }
}

package com.ssghot.ssg.s3.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;


@Slf4j
@RequiredArgsConstructor
@Component
public class S3Uploader {

    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    public String bucket;  // S3 버킷 이름


    // S3로 파일 업로드하기
    public String upload(MultipartFile uploadFile, String dirName) throws IOException {
    System.out.println(uploadFile.getName());
        String fileName = dirName +  UUID.randomUUID() + "-" +uploadFile.getOriginalFilename();
        String uploadImageUrl = putS3(uploadFile, fileName); // s3로 업로드
        return uploadImageUrl;
    }
    // S3로 업로드
    private String putS3(MultipartFile uploadFile, String fileName) throws IOException {

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentType(uploadFile.getContentType());
        System.out.println(fileName);
        amazonS3Client.putObject(new PutObjectRequest(bucket, fileName, uploadFile.getInputStream(),objectMetadata).withCannedAcl(CannedAccessControlList.PublicRead));

        return amazonS3Client.getUrl(bucket, fileName).toString();
    }


}

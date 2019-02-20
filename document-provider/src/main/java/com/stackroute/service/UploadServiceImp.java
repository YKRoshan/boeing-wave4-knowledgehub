package com.stackroute.service;

import org.springframework.web.multipart.MultipartFile;

public interface UploadServiceImp {

    public void store(MultipartFile file);

}

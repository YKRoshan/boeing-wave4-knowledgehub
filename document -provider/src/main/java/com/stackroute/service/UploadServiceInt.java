package com.stackroute.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;


public interface UploadServiceInt  {

    public void store(MultipartFile file);

    public Resource loadFile(String filename);

    public String loadData();

}

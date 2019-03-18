package com.stackroute.service;

import com.stackroute.domain.NlpResult;
import com.stackroute.repository.NlpResultRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class NlpResultServiceImpl implements NlpResultService {
    NlpResultRepository nlpresultRepository;

    @Autowired
    public NlpResultServiceImpl(NlpResultRepository nlpresultRepository) {
        this.nlpresultRepository = nlpresultRepository;
    }

    @Override
    public NlpResult saveNlpResult(NlpResult nlpresult){
        if(nlpresultRepository.existsBySessonId(nlpresult.getSessonId())){
            System.out.println("NlpResult already exits");
        }
        NlpResult savedNlpResult = nlpresultRepository.save(nlpresult);
        if(savedNlpResult==null){
            System.out.println("NlpResult already exits");
        }
        return savedNlpResult;
    }
}
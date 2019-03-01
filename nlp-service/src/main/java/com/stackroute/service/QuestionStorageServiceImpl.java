package com.stackroute.service;

import com.stackroute.domain.Question;
import com.stackroute.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class QuestionStorageServiceImpl implements QuestionStorageService {
    private QuestionRepository questionRepository;

    @Autowired
    public QuestionStorageServiceImpl(QuestionRepository questionRepository){
        this.questionRepository = questionRepository;
    }

    public Question saveQuestion(String question) {
        String uniqueId = UUID.randomUUID().toString();
        Question question1 = new Question(uniqueId,question);
        Question savedQuestion = questionRepository.save(question1);
        return savedQuestion;
    }
}

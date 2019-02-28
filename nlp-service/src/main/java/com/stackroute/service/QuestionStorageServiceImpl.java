package com.stackroute.service;

import com.stackroute.domain.Question;
import com.stackroute.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionStorageServiceImpl implements QuestionStorageService {
    private QuestionRepository questionRepository;

    @Autowired
    public QuestionStorageServiceImpl(QuestionRepository questionRepository){
        this.questionRepository = questionRepository;
    }

    public Question saveQuestion(String question) {
        Question question1 = new Question(question);
        Question savedQuestion = questionRepository.save(question1);
        return savedQuestion;
    }
}

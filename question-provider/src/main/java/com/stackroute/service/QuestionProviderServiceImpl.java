package com.stackroute.service;

import com.stackroute.domain.Question;
import com.stackroute.repository.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionProviderServiceImpl implements QuestionProviderService {
    private QuestionsRepository questionsRepository;

    @Autowired
    public QuestionProviderServiceImpl(QuestionsRepository questionsRepository) {
        this.questionsRepository = questionsRepository;
    }

    public List<Question> getAllQuestions() {
        List<Question> allQuestions = questionsRepository.findAll();
        return allQuestions;
    }

}

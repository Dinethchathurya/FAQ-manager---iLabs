package com.faqmanager.faqmanager.service;

import com.faqmanager.faqmanager.model.Question;

import com.faqmanager.faqmanager.repository.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionsRepository questionsRepository;

    @Autowired
    public QuestionService(QuestionsRepository questionsRepository) {
        this.questionsRepository = questionsRepository;
    }

    public Optional<Question> getQuestionById (Long id) {
        return questionsRepository.findById(id);
    }
    public List<Question> getAllQuestions () {
        return questionsRepository.findAll();
    }
    public Question save(Question question) {
        return questionsRepository.save(question);
    }
    public Question update(Long id, Question questionDetails) {
        return questionsRepository.findById(id).map(question -> {
            question.setQuestion(questionDetails.getQuestion());
            question.setCategoryId(questionDetails.getCategoryId());
            question.setStatus(questionDetails.getStatus());
            question.setAction(questionDetails.getAction());
            return questionsRepository.save(question);  // 🔹 `save()` performs update
        }).orElseThrow(() -> new RuntimeException("Question not found"));
    }
    public void delete(Long id) {
        questionsRepository.deleteById(id);
    }
    
}

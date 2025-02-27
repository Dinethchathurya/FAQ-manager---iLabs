package com.faqmanager.faqmanager.controller;

import com.faqmanager.faqmanager.model.Question;
import com.faqmanager.faqmanager.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/faqmanager/questions")
public class QuestionsController {

    @Autowired
    private QuestionService questionService;

    @GetMapping
    public List<Question> findAll(){
        return questionService.getAllQuestions();
    }

    @GetMapping("/{id}")
    public Optional<Question> getQuestionById(@PathVariable Long id) {
        return questionService.getQuestionById(id);
    }

    @PostMapping
    public Question createQuestion(@RequestBody Question question) {
        return questionService.save(question);
    }

    @PutMapping("/{id}")
    public Question updateQuestion(@PathVariable Long id, @RequestBody Question question) {
        return questionService.update(id, question);
    }

    @DeleteMapping("/{id}")
    public void deleteQuestion(@PathVariable Long id) {
        questionService.delete(id);
    }

}

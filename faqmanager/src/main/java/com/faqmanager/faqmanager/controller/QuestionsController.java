package com.faqmanager.faqmanager.controller;

import com.faqmanager.faqmanager.model.Question;
import com.faqmanager.faqmanager.service.QuestionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/faqmanager/questions")
@Tag(name="Questions", description = "This is for handle questions")
public class QuestionsController {


    private final QuestionService questionService;

    @Autowired
    public QuestionsController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping
    @Operation(summary = "return all questions available in database.")
    public List<Question> findAll(){
        return questionService.getAllQuestions();
    }

    @Operation(summary = "find question by Id ")
    @GetMapping("/{id}")
    public Optional<Question> getQuestionById(@PathVariable Long id) {
        return questionService.getQuestionById(id);
    }

    @Operation(summary = "create new question")
    @PostMapping
    public Question createQuestion(@RequestBody Question question) {
        return questionService.save(question);
    }

    @Operation(summary = "update existing question")
    @PutMapping("/{id}")
    public Question updateQuestion(@PathVariable Long id, @RequestBody Question question) {
        return questionService.update(id, question);
    }

    @Operation(summary = "delete question using ID ")
    @DeleteMapping("/{id}")
    public void deleteQuestion(@PathVariable Long id) {
        questionService.delete(id);
    }

}

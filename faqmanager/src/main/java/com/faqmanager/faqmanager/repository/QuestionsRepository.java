package com.faqmanager.faqmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.faqmanager.faqmanager.model.Question;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionsRepository extends JpaRepository<Question, Long> {

}

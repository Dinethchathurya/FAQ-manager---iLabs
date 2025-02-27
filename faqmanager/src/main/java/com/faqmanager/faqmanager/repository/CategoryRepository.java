package com.faqmanager.faqmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.faqmanager.faqmanager.model.Category;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}

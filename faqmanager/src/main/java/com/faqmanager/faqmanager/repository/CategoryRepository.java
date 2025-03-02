package com.faqmanager.faqmanager.repository;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import com.faqmanager.faqmanager.model.Category;
import org.springframework.stereotype.Repository;

@Repository
@Tag(name="REST repository", description = "this is a interface based on jpaRepository")
public interface CategoryRepository extends JpaRepository<Category, Long> {
}

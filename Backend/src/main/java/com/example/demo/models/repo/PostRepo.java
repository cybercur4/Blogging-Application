package com.example.demo.models.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.posts;

public interface PostRepo extends JpaRepository<posts , Long> {
	
}

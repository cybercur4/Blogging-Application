package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.User;
import com.example.demo.models.posts;
import com.example.demo.models.repo.PostRepo;
import com.example.demo.models.repo.UserRepo;

@RestController
public class ApiControllers {
	
	@Autowired
	private PostRepo postRepo;
	
	@Autowired
	private UserRepo userRepo;
	
	@GetMapping(value="/")
	public String getPost() {
		return "Welcome!!";	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value="/posts")
	public List<posts> getPosts() {
		
		return postRepo.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value="/postblog")
	public String savePost(@RequestBody posts post) {
		postRepo.save(post);
		return "Posted!";
	}
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value="/users")
	public List<User> getUsers() {
		
		return userRepo.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value="/register")
	public String register(@RequestBody User user) {
		userRepo.save(user);
		return "successfully registered";
	}
}

package com.example.demo.models.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.User;

public interface UserRepo extends JpaRepository<User , Long> {

}

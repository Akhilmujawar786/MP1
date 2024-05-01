package com.minorproject.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.minorproject.backend.model.User;


public interface UserRepository extends MongoRepository<User,String> { 
    //first argument Entity / Document, second datatype of primarykey

    
    // List<User> findBySeverity(int severity);

    Optional<User> findByEmail(String email);

    // //our query
    // @Query("{Assignee : ?0}")
    // List<User> getTasksByAssignee(String assignee);
}

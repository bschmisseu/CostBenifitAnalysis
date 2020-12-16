package com.gcu.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.gcu.model.User;

/**
 * Cost Benefit Analysis Backend
 * CST-326 Professor Hughes
 * User Repository
 * @author Bryce Schmisseur and Holland Aucoin
 * @version 1.0
 * 
 * {@summary This class extends MongoRepository in order to set up a DAO with methods that can push and pull data to and from
 * the Mongo database }
 */
@Repository
public interface UserRepository extends MongoRepository <User, String> {
	
	/**
	 * findByUsernameAndPassword is a custom query method for MongoDB to retrieve a full user object based on a specified username
	 * and password
	 * @param username - String: the username of the user
	 * @param password - String: the password of the user
	 * @return
	 */
	@Query("{'userCredentials.username': ?0, 'userCredentials.password': ?1}")
	public User findByUsernameAndPassword(String username, String password);

}


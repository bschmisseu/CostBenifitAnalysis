package com.gcu.business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gcu.data.UserRepository;
import com.gcu.model.User;

/**
 * Cost Benefit Analysis Backend
 * CST-236 Professor Hughes
 * User Business Service
 * @author Bryce Schmisseur and Holland Aucoin
 * @version 1.0
 * {@summary User business service is created in order to have the data be able to pass through a separate layer to connect 
 * the user data service to the user controller rest API }
 * 
 */
@Service
public class UserBusinessService {

	//userRepo - UserRepository: a DAO in which provides methods in order to connect to the data service and MongoDB
	@Autowired
	private final UserRepository userRepo;
	
	/**
	 * User Business Service constructor in order to inject the DAO
	 * @param userRepo - UserRepority: Data Access Object
	 */
	public UserBusinessService(UserRepository userRepo) {
		this.userRepo = userRepo;
	}
	
	/**
	 * findAll makes a request to the DOA to grab all the users from the MongoDB database
	 * 
	 * @return users - List<User>: List of Users
	 */
	public List<User> findAll() {
		return userRepo.findAll();
	}
	
	/**
	 * findById takes in a specific if to return a list of users that contain that _id
	 * 
	 * @param _id - String: The generated ID of an user with in the database
	 * @return users - Optional<User>: A list of users retrieved from the database
	 */
	public Optional<User> findById(String id) {
		return userRepo.findById(id);
	}
	
	/**
	 * save takes in an user model that can either be a new or old entry. The DAO's save method is considered an 'upsert' method
	 * this means that if the _id of the model is already in the database it will update all properties of the document. If there is
	 * no _id or an _id that does not match any other user in the database it will create a new document within the database.
	 * 
	 * @param user - User: Entry object user containing all the properties of an user
	 * @return user - User: User object model containing all the properties of an user
	 */
	public User save(User user) {
		return userRepo.save(user);
	}
	
	/**
	 * deleteById take in a specific user's _id and using the DAO's method will remove the document from the database
	 * 
	 * @param _id - String: The generated ID of an user with in the database
	 */
	public void deleteById(String Id){
		userRepo.deleteById(Id);
	}
	
	/**
	 * validate takes in blank user model expect for the username and password when a user is logging in
	 * and with a custom Query by the DAO will send back a full user object in order to validate the users
	 * credentials.
	 * 
	 * @param user - User: Entry object user containing all the properties of an user
	 * @return user - User: Entry object user containing all the properties of an user
	 */
	public User validate(User user) {
		return userRepo.findByUsernameAndPassword(user.getUserCredentials().getUsername(), 
												  user.getUserCredentials().getPassword());
	}
}

package com.gcu.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gcu.business.UserBusinessService;
import com.gcu.model.User;

/**
 * Cost Benefit Analysis Backend
 * CST-326 Professor Hughes
 * User Controller
 * @author Bryce Schmisseur and Holland Aucoin
 * @version 1.0
 * 
 * {@summary This class sets up a REST API to take in and send information from React. The controller calls the Business service in order
 * to interact with the back end.}
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/users")
public class UserController {

	//userService - UserBusinessService: an object in order to send and receive information from the data service and database
	@Autowired
	private final UserBusinessService userService;
	
	/**
	 * UserConroller constructor that injects the UserBusinessService using dependency injection
	 * 
	 * @param UserService - UserBusinessService: an object in order to send and receive information from the data service and database
	 */
	public UserController(UserBusinessService userService) {
		this.userService = userService;
	}
	
	/**
	 * findAll is a HTTP GET requests in order to send all the user retrieved by the business and data service back to the user
	 * 
	 * @return users - List<User>: a list of users returned in a HTTP request formated with JSON
	 */
	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<User> getAll() {
		return userService.findAll();
	}
	
	/**
	 * validate is an HTTP POST request containing a user model with the user credentials filled in the request body. These credentials
	 * are sent to the business and data services in order to validate the user within the database
	 * 
	 * @param user - User: User object model containing all the properties of an User
	 * @return user - User: User object model containing all the properties of an User
	 */
	@RequestMapping(value = "/validate", method = RequestMethod.POST)
	public User validate(@RequestBody User user) {
		return userService.validate(user);
	}
	
	/**
	 * findById is a HTTP POST request containing an user's id in order to return a list of user models
	 * 
	 * @param json - Map<String, String>: JSON string that contains a entry's _id
	 * @return entries - Optional<Entry>: A list of entries retrieved from the database
	 */
	@RequestMapping(value = "/id", method=RequestMethod.POST)
	public Optional<User> viewById(@RequestBody Map<String, String> json) {
		String _id = json.get("_id");
		return userService.findById(_id);
	}
	
	/**
	 * save is an HTTP POST request working as an 'upsert' in order to either update an user or create a new document to insert in to
	 * the database
	 * 
	 * @param user - User: User object model containing all the properties of an User
	 * @return user - User: User object model containing all the properties of an User
	 */
	@RequestMapping(value="/save", method=RequestMethod.POST)
	public User save(@RequestBody User user) {
		return userService.save(user);
	}
	
	/**
	 * deleteById is an HTTP POST request containing an user's _id with in the request body in order to delete the specific user from
	 * the database interacting with the business and data services
	 * 
	 * @param _id - String: The generated ID of an user with in the database
	 */
	@RequestMapping(value="/delete", method=RequestMethod.POST)
	public void deleteById(@RequestBody String Id){
		userService.deleteById(Id);
	}
}

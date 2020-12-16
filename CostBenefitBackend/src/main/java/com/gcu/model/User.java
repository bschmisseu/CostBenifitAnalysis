package com.gcu.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
/**
 * Cost Benefit Analysis Backend
 * CST-326 Professor Hughes
 * User
 * @author Bryce Schmisseur and Holland Aucoin
 * @version 1.0
 * 
 * {@summary This class is an object model set up of a User object in order to store in the properties of an User }
 */
@Document(collection = "user")
public class User {
	
	//_id - String: the generated _id of the user created with in MongoDB
	@Id
	private String _id;
	
	//firstName - String: The first name of the user
	private String firstName;
	
	//lastName - String: the last name of the user
	private String lastName;
	
	//userCredentials - UserCredentials: an object containing the user name and password of the user
	private UserCredential userCredentials;
	
	//email - String: the email of the user
	private String email; 
	
	//company - Company: the company in which the user belongs to
	private String company;
	
	/**
	 * Getter methods of the User Property
	 * 
	 * @return t - <T>: a variable of a property
	 */
	public String get_id() {
		return _id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public UserCredential getUserCredentials() {
		return userCredentials;
	}
	
	public String getEmail() {
		return email;
	}
	
	public String getCompany() {
		return company;
	}
	
	/**
	 * Setter methods of the User Property
	 * 
	 * @param t - <T>: a variable of a property
	 */
	public void set_id(String _id) {
		this._id = _id;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public void setUserCredentials(UserCredential userCredentials) {
		this.userCredentials = userCredentials;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public void setCompany(String company) {
		this.company = company;
	}
}

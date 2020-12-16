package com.gcu.model;

/**
 * Cost Benefit Analysis Backend
 * CST-326 Professor Hughes
 * User Credential
 * @author Bryce Schmisseur and Holland Aucoin
 * @version 1.0
 * 
 * {@summary This class is an object model set up of a User Credential object in order to store in the properties of an User Credential }
 */
public class UserCredential {
	
	//username - String: the username in which the user created for their account
	private String username;
	
	//password - String: the password the user created in during registration in order to secure their account
	private String password;
	
	/**
	 * UserCredential constructor in order to assign the variables to a user credential object
	 * 
	 * @param username - String: the username created by the user
	 * @param password - String: the password created by the user
	 */
	public UserCredential(String username, String password){
		this.username = username;
		this.password = password; 
	}
	
	/**
	 * UserCredential default constructor in order to create an base for the user credential object 
	 */
	public UserCredential() {
		this.username = "";
		this.password = "";
	}
	
	/**
	 * Getter methods of the UserCredential Property
	 * 
	 * @return t - <T>: a variable of a property
	 */
	public String getUsername() {
		return username;
	}
	
	public String getPassword() {
		return password;
	}
	
	/**
	 * Setter methods of the UserCredential Property
	 * 
	 * @param t - <T>: a variable of a property
	 */
	public void setUsername(String username) {
		this.username = username;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
}

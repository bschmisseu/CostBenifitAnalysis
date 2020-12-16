package com.gcu.data;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.gcu.model.Entry;

/**
 * Cost Benefit Analysis Backend
 * CST-326 Professor Hughes
 * Entry Repository
 * @author Bryce Schmisseur and Holland Aucoin
 * @version 1.0
 * 
 * {@summary This class extends MongoRepository in order to set up a DAO with methods that can push and pull data to and from
 * the mongo database }
 */
@Repository
public interface EntryRepository extends MongoRepository <Entry, String> {
	
	/**
	 * findBy_userId is a custom query method for MongoDB in order to retrieve a list of entries that a specific user created
	 * @param _userId - String: The generated ID of the user with in the database that created the entry 
	 * @return entries - List<Entry>: List of Entries
	 */
	@Query("{'_userId': ?0}")
	public List<Entry> findBy_userId(String _userId);
	
}


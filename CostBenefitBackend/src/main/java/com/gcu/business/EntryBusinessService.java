package com.gcu.business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gcu.data.EntryRepository;
import com.gcu.model.Entry;

/**
 * Cost Benefit Analysis Backend
 * CST-326 Professor Hughes
 * Entry Business Service
 * @author Bryce Schmisseur and Holland Aucoin
 * @version 1.0
 * {@summary Entry business service is created in order to have the data be able to pass through a separate layer to connect 
 * the entry data service to the entry controller rest api }
 * 
 */
@Service
public class EntryBusinessService {
	
	//entryRepo - EntryRepository: a DAO in which provides methods in order to connect to the data service and MongoDB
	@Autowired
	private final EntryRepository entryRepo;
	
	/**
	 * Entry Business Service constructor in order to inject the DAO
	 * @param entryRepo - EntryRepority: Data Access Object
	 */
	public EntryBusinessService(EntryRepository entryRepo) {
		this.entryRepo = entryRepo;
	}

	/**
	 * findAll makes a request to the DOA to grab all the entries from the MongoDB database
	 * 
	 * @return entries - List<Entry>: List of Entries
	 */
	public List<Entry> findAll() {
		return entryRepo.findAll();
	}
	
	/**
	 * findById takes in a specific if to return a list of entries that contain that _id
	 * 
	 * @param _id - String: The generated ID of an entry with in the database
	 * @return entries - Optional<Entry>: A list of entries retrieved from the database
	 */
	public Optional<Entry> findById(String _id) {
		return entryRepo.findById(_id);
	}
	
	/**
	 * save takes in an entry model that can either be a new or old entry. The DAO's save method is considered an 'upsert' method
	 * this means that if the _id of the model is already in the database it will update all properties of the document. If there is
	 * no _id or an _id that does not match any other entry in the database it will create a new document within the database.
	 * 
	 * @param entry - Entry: Entry object model containing all the properties of an Entry
	 * @return entry - Entry: Entry object model containing all the properties of an Entry
	 */
	public Entry save(Entry entry) {
		//Calculates the ratio and net profit of the cost and revenue streams of the entry
		entry.calculateBenifit();
		return entryRepo.save(entry);
	}
	
	/**
	 * deleteById take in a specific entry's _id and using the DAO's method will remove the document from the database
	 * 
	 * @param _id - String: The generated ID of an entry with in the database
	 */
	public void deleteById(String _id){
		entryRepo.deleteById(_id);
	}
	
	/**
	 * findBy_userId takes in a _userId in order to retrieve all entries that have been created by the specified user 
	 * 
	 * @param _userId - String: The generated ID of the user with in the database that created the entry 
	 * @return entries - List<Entry>: List of Entries
	 */
	public List<Entry> findBy_userId(String _userId) {
		return entryRepo.findBy_userId(_userId);
	}
}


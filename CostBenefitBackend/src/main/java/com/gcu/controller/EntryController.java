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

import com.gcu.business.EntryBusinessService;
import com.gcu.model.Entry;

/**
 * Cost Benefit Analysis Backend
 * CST-326 Professor Hughes
 * EntryController
 * @author Bryce Schmisseur and Holland Aucoin
 * @version 1.0
 * 
 * {@summary This class sets up a REST API to take in and send information from React. The controller calls the Business service in order
 * to interact with the back end.}
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/entries")
public class EntryController {

	//entryService - EntryBusinessService: an object in order to send and receive information from the data service and database
	@Autowired
	private final EntryBusinessService entryService;
	
	/**
	 * EntryConroller constructor that injects the EntryBusinessService using dependency injection
	 * 
	 * @param entryService - EntryBusinessService: an object in order to send and receive information from the data service and database
	 */
	public EntryController(EntryBusinessService entryService) {
		this.entryService = entryService;
	}
	
	/**
	 * findAll is a HTTP GET requests in order to send all the entries retrieved by the business and data service back to the user
	 * 
	 * @return entries - List<Entry>: a list of entries returned in a HTTP request formated with JSON
	 */
	@RequestMapping(value = "", method=RequestMethod.GET)
	public List<Entry> findAll() {
		return entryService.findAll();
	}
	
	/**
	 * findByUserId is a HTTP POST request containing a _userId within the request body to return a specific list of entries in which
	 * the user has created in the past stored in the database.
	 * 
	 * @param json - Map<String, String>: JSON string that contains a _userId
	 * @return entries - List<Entry>: a refined list of entries based on the _userId given
	 */
	@RequestMapping(value = "/userid", method=RequestMethod.POST)
	public List<Entry> findByUserId(@RequestBody Map<String, String> json) {
		String _userId = json.get("_userId");
		return entryService.findBy_userId(_userId);
	}
	
	/**
	 * findById is a HTTP POST request containing an entry's id in order to return a full entry model
	 * 
	 * @param json - Map<String, String>: JSON string that contains a entry's _id
	 * @return entries - Optional<Entry>: A list of entries retrieved from the database
	 */
	@RequestMapping(value = "/id", method=RequestMethod.POST)
	public Optional<Entry> findById(@RequestBody Map<String, String> json) {
		String _id = json.get("_id");
		System.out.println("ID: " + _id);
		return entryService.findById(_id);
	}
	
	/**
	 * save is an HTTP POST request working as an 'upsert' in order to either update an entry or create a new document to insert in to
	 * the database
	 * 
	 * @param entry - Entry: Entry object model containing all the properties of an Entry
	 * @return entry - Entry: Entry object model containing all the properties of an Entry
	 */
	@RequestMapping(value="/save", method=RequestMethod.POST)
	public Entry save(@RequestBody Entry entry) {
		return entryService.save(entry);
	}
	
	/**
	 * deleteById is an HTTP POST request containing an entry's _id with in the request body in order to delete the specific entry from
	 * the database interacting with the business and data services
	 * 
	 * @param _id - String: The generated ID of an entry with in the database
	 */
	@RequestMapping(value="/delete", method=RequestMethod.POST)
	public void deleteById(@RequestBody String _id){
		entryService.deleteById(_id);
	}
}

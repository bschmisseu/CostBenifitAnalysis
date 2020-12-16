package com.gcu.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Cost Benefit Analysis Backend
 * CST-326 Professor Hughes
 * Entry
 * @author Bryce Schmisseur and Holland Aucoin
 * @version 1.0
 * 
 * {@summary This class is an object model set up of a Entry object in order to store in the properties of an Entry }
 */
@Document(collection = "entry")
public class Entry {

	//_id - String: the Generated _id of the Entry which is generated with in MongoDB
	@Id
	private String _id;
	
	//name - String: The name given by the user in order to make the entry unique and labeled
	private String name;
	
	//cost - List<Double>: a list of all cost streams of the entry
	private List<Double> cost;
	
	// revenues - List<Double>: a list of all revenue streams of the entry
	private List<Double> revenues;
	
	//_userId - String: the unique id of the user that created the entry
	private String _userId;
	
	//ratio - double: the cost benefit analysis calculation of the sum of revenues over the sum of cost
	private double ratio;
	
	//netProfit - double: the cost benefit analysis calculation of the sum of revenues subtracted from the sum of cost
	private double netProfit;

	/**
	 * Getter methods of the Entry Property
	 * 
	 * @return t - <T>: a variable of a property
	 */
	public String get_id() {
		return _id;
	}

	public String getName() {
		return name;
	}

	public List<Double> getCost() {
		return cost;
	}

	public List<Double> getRevenues() {
		return revenues;
	}

	public String get_userId() {
		return _userId;
	}

	public double getRatio() {
		return ratio;
	}

	public double getNetProfit() {
		return netProfit;
	}
	
	/**
	 * Setter methods of the Entry Property
	 * 
	 * @param t - <T>: a variable of a property
	 */
	public void set_id(String _id) {
		this._id = _id;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setCost(List<Double> cost) {
		this.cost = cost;
	}
	
	public void setRevenues(List<Double> revenues) {
		this.revenues = revenues;
	}
	
	public void set_userId(String _userId) {
		this._userId = _userId;
	}
	
	public void setRatio(double ratio) {
		this.ratio = ratio;
	}
	
	public void setNetProfit(double netProfit) {
		this.netProfit = netProfit;
	}

	/**
	 * calculateBenifit is a method that takes all the cost and revenue streams with in the entry model in order to calculate
	 * the Cost Benefit Ratio and the net profit of the product.
	 */
	public void calculateBenifit() {
		double totalCost = 0;
		double totalRevenue = 0;

		for (int i = 0; i < this.cost.size(); i++) {
			totalCost += this.cost.get(i);
		}

		for (int i = 0; i < this.revenues.size(); i++) {
			totalRevenue += this.revenues.get(i);
		}

		this.netProfit = totalRevenue - totalCost;
		this.ratio = totalRevenue / totalCost;
	}
}
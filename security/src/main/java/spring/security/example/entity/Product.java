package spring.security.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Product {
	
	@Id
	@GeneratedValue
	int id;
	 String productName;
	 double price;
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(int id, String productName, double price) {
		super();
		this.id = id;
		this.productName = productName;
		this.price = price;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	 
	 

}

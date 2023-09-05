package spring.security.example.service;

import java.util.List;

import org.springframework.stereotype.Component;

import spring.security.example.entity.Product;

@Component
public interface ProductService {

	void add(Product product);
	List<Product> getAll();
	void update(int id,Product product);
	Product getProduct(int id);
}

package spring.security.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import spring.security.example.entity.Product;
import spring.security.example.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class ProductController {

	@Autowired
	ProductService ps;
	
	@PostMapping("Admin/add")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	void insert(@RequestBody Product product) {
		ps.add(product);
	}
	
	@GetMapping("/getAll")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
	List<Product> get(){
		return ps.getAll();
				
	}
	
	@PutMapping("/Admin/update/{id}")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	void update(@PathVariable int id,@RequestBody Product product)
	{
		ps.update(id, product);
	}
	
	
	@GetMapping("Admin/get/{id}")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	Product get(@PathVariable int id) {
		return ps.getProduct(id);
	}
}

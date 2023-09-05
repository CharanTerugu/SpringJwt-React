package spring.security.example.service.serviceimplementaion;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.security.example.entity.Product;
import spring.security.example.repository.ProductRepository;
import spring.security.example.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	ProductRepository repo;
	
	@Override
	public void add(Product product) {
		// TODO Auto-generated method stub
		repo.save(product);
	}

	@Override
	public List<Product> getAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public void update(int id,Product product) {
		// TODO Auto-generated method stub
		Product p=repo.getById(id);
		p.setPrice(product.getPrice());
		p.setProductName(product.getProductName());
		repo.save(p);
	}

	@Override
	public Product getProduct(int id) {
		// TODO Auto-generated method stub
		return repo.getById(id);
	}

}

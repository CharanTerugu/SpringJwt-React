package spring.security.example.service.serviceimplementaion;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import spring.security.example.entity.User;
import spring.security.example.repository.UserRepository;
import spring.security.example.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	
	@Autowired
	UserRepository repo;
	@Autowired
	PasswordEncoder passwordEncoder;
	@Override
	public void addUser(User user) {
		// TODO Auto-generated method stub
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		repo.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public User getUserById(int id) {
		// TODO Auto-generated method stub
		return repo.getById(id);
	}
    
	
}
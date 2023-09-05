package spring.security.example.service;
import java.util.List;

import org.springframework.stereotype.Component;

import spring.security.example.entity.User;



@Component
public interface UserService {

	void addUser(User user);
	List<User> getAllUsers();
	User getUserById(int id);
}

package spring.security.example.service.serviceimplementaion;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import spring.security.example.dto.UserUserDetails;
import spring.security.example.entity.User;
import spring.security.example.repository.UserRepository;


@Service
public class UserUserDetailsService implements UserDetailsService{

	@Autowired
	UserRepository repo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> user=repo.findByName(username);
		return user.map(UserUserDetails::new).orElseThrow(()->new UsernameNotFoundException("User not found "));
	
	}
	
}

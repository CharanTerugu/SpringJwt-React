package spring.security.example.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import spring.security.example.dto.AuthRequest;
import spring.security.example.entity.User;
import spring.security.example.exceptions.UnauthorisedException;
import spring.security.example.exceptions.UnauthorizedAccessException;
import spring.security.example.service.UserService;
import spring.security.example.service.serviceimplementaion.JwtService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController {

	@Autowired
	UserService us;
	@Autowired
	JwtService jwtService;
	
	@Autowired
	AuthenticationManager authmanager;
	
	@PostMapping("user/register")
	void inser(@RequestBody User user) {
		
		us.addUser(user);
	}
	@GetMapping("Admin/users")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	ResponseEntity<?> getAll( HttpServletRequest request) {
		 
		
		return new ResponseEntity(us.getAllUsers(),HttpStatus.OK);
	}
	
	@GetMapping("user/hello")
	String hello() {
		return "hello";
	}
	
	@PostMapping("user/authenticate")
  ResponseEntity<?> authenticateAndGetToken(@RequestBody AuthRequest auth)  {
		
		Authentication authentication ;
		try
		{
      authentication = authmanager.authenticate(new UsernamePasswordAuthenticationToken(auth.getUsername(), auth.getPasssword()));
     String token= jwtService.generateToken(auth.getUsername(),authentication.getAuthorities());
    System.out.println( authentication.getAuthorities());
     return new ResponseEntity(token,HttpStatus.OK);
		}
		catch (Exception e) {
			return new ResponseEntity("Invalid credentials ",HttpStatus.UNAUTHORIZED);
		}
       
  }
}

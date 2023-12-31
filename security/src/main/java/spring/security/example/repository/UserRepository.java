package spring.security.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import spring.security.example.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	Optional<User> findByName(String username);

}

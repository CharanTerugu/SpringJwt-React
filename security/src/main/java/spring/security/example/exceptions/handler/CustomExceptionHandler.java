package spring.security.example.exceptions.handler;

import java.nio.file.AccessDeniedException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import spring.security.example.exceptions.UnauthorizedAccessException;

@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler({AccessDeniedException.class, UnauthorizedAccessException.class})
    public ResponseEntity<String> handleAccessDeniedException(Exception ex) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Unauthorized: " + ex.getMessage());
    }
}
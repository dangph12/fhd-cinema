package com.company.project.movies.exception;


import com.company.project.movies.dto.request.MovieApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class MovieExceptionHandler {

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    ResponseEntity<MovieApiResponse<Void>> methodArgumentNotValidExceptionHandler(MethodArgumentNotValidException exception) {

        MovieApiResponse<Void> movieApiResponse = new MovieApiResponse<>();

        movieApiResponse.setMessage(exception.getFieldError().getDefaultMessage());

        return ResponseEntity.badRequest().body(movieApiResponse);

    }

    @ExceptionHandler(value = MovieException.class)
    ResponseEntity<MovieApiResponse<Void>> movieExceptionHandler(MovieException exception) {

        MovieApiResponse<Void> movieApiResponse = new MovieApiResponse<>();

        ErrorCode errorCode = exception.getErrorCode();

        movieApiResponse.setCode(errorCode.getCode());
        movieApiResponse.setMessage(errorCode.getMessage());

        return ResponseEntity.badRequest().body(movieApiResponse);

    }

}

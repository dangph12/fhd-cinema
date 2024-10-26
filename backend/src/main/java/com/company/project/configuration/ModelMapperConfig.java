package com.company.project.configuration;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.module.movies.dto.response.MovieDto;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.showtimes.dto.response.ShowtimeDto;
import com.company.project.module.showtimes.entity.Showtime;

import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {
    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STANDARD);

        modelMapper.addMappings(new PropertyMap<Movie, MovieDto>() {
            @Override
            protected void configure() {
                using(context -> {
                    List<Showtime> showtimes = ((Movie) context.getSource()).getShowtimes();
                    return showtimes.stream()
                            .filter(showtime -> !showtime.isDeleted())  // Filter out deleted showtimes
                            .map(showtime -> modelMapper.map(showtime, ShowtimeDto.class))
                            .collect(Collectors.toList());
                }).map(source, destination.getShowtimes());
            }
        });

        modelMapper.addMappings(new PropertyMap<Showtime, ShowtimeDto>() {
            @Override
            protected void configure() {
                map().setMovieId(source.getMovie().getMovieId());
            }
        });

        return modelMapper;
    }
}

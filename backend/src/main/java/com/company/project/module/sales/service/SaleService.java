package com.company.project.module.sales.service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.bookings.repository.BookingRepository;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.movies.service.MovieService;
import com.company.project.module.sales.common.SaleStatusMessage;
import com.company.project.module.sales.dto.response.SaleMovieDto;
import com.company.project.module.sales.exception.SaleException;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.showtimes.repository.ShowtimeRepository;
import com.company.project.module.snacks.entity.Snack;
import com.company.project.module.tickets.entity.Ticket;
import com.company.project.utils.Utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class SaleService {

  @Autowired
  private MovieService movieService;

  @Autowired
  private BookingRepository bookingRepository;

  @Autowired
  private ShowtimeRepository showtimeRepository;

  @Autowired
  private Utils utils;

  public ApiPagination<SaleMovieDto> viewSales(String movieTitle, int page, int pageSize,
      List<String> cinemaNames, LocalDateTime startDate, LocalDateTime endDate, String sortBy, String sortDirection) {

    if (page < 1 || pageSize < 1) {
      throw new SaleException(Status.FAIL.getValue(), SaleStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    List<String> validFieldNames = utils.getEntityFields(SaleMovieDto.class);
    if (!validFieldNames.contains(sortBy)) {
      throw new SaleException(Status.FAIL.getValue(), SaleStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);

    // Fetch all showtimes without pagination
    List<Showtime> showtimes = showtimeRepository.searchShowtimesWithoutPagination(movieTitle, cinemaNames, startDate,
        endDate);
    long distinctMovieCount = showtimeRepository.countDistinctMovies(movieTitle, cinemaNames, startDate, endDate);

    Map<Movie, Integer> movieRevenueMap = new HashMap<>();

    // Calculate revenue for each movie
    for (Showtime showtime : showtimes) {
      Movie movie = showtime.getMovie();
      int totalRevenueForShowtime = bookingRepository.findByShowtimeAndIsDeletedFalse(showtime).stream()
          .flatMap(booking -> booking.getTickets().stream())
          .filter(ticket -> !ticket.isDeleted())
          .mapToInt(Ticket::getTicketPrice)
          .sum();

      movieRevenueMap.merge(movie, totalRevenueForShowtime, Integer::sum);
    }

    // Create list of SaleMovieDto and apply sorting
    List<SaleMovieDto> saleMovieDtos = movieRevenueMap.entrySet().stream()
        .map(entry -> new SaleMovieDto(entry.getKey(), entry.getValue()))
        .sorted((a, b) -> direction.equals(Sort.Direction.DESC) ? b.getTotalRevenue() - a.getTotalRevenue()
            : a.getTotalRevenue() - b.getTotalRevenue())
        .collect(Collectors.toList());

    // Apply manual pagination to the distinct movies list
    int fromIndex = Math.min((page - 1) * pageSize, saleMovieDtos.size());
    int toIndex = Math.min(fromIndex + pageSize, saleMovieDtos.size());
    List<SaleMovieDto> paginatedMovies = saleMovieDtos.subList(fromIndex, toIndex);

    return ApiPagination.<SaleMovieDto>builder()
        .result(paginatedMovies)
        .count(distinctMovieCount)
        .build();
  }

  public SaleMovieDto calculateRevenueByMovieId(String movieId) {
    Movie movie = movieService.getMovieById(movieId);

    List<Showtime> showtimes = movie.getShowtimes();

    int totalRevenue = 0;

    for (Showtime showtime : showtimes) {
      List<Booking> bookings = bookingRepository.findByShowtimeAndIsDeletedFalse(showtime);
      System.out.println("Showtime: " + showtime.getShowtimeId() + ", Bookings: " + bookings.size());
      for (Booking booking : bookings) {
        List<Ticket> tickets = booking.getTickets();
        System.out.println("Booking: " + booking.getBookingId() + ", Tickets: " + tickets.size());
        List<Snack> snacks = booking.getSnacks();

        int ticketPrice = tickets.stream()
            .mapToInt(Ticket::getTicketPrice)
            .sum();

        int ticketSnack = snacks.stream()
            .mapToInt(Snack::getSnackPrice)
            .sum();

        totalRevenue += (ticketPrice + ticketSnack);
      }
    }

    SaleMovieDto saleMovieDto = SaleMovieDto.builder()
        .movie(movie)
        .totalRevenue(totalRevenue)
        .build();

    return saleMovieDto;
  }

}

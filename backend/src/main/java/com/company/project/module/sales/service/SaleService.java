package com.company.project.module.sales.service;

import java.util.List;

import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.bookings.repository.BookingRepository;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.movies.service.MovieService;
import com.company.project.module.sales.dto.response.SaleMovieDto;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.snacks.entity.Snack;
import com.company.project.module.tickets.entity.Ticket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaleService {

  @Autowired
  private MovieService movieService;

  @Autowired
  private BookingRepository bookingRepository;

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

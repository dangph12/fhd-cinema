package com.company.project.module.bookings.repository;

import java.time.LocalDate;
import java.util.List;

import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.showtimes.entity.Showtime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, String> {

  boolean existsByBookingIdAndIsDeletedFalse(String bookingId);

  List<Booking> findAllByIsDeletedFalse();

  Booking findByBookingIdAndIsDeletedFalse(String bookingId);

  List<Booking> findByShowtimeAndIsDeletedFalse(Showtime showtime);

  List<Booking> findByCustomerAndIsDeletedFalse(Customer customer);

  @Query("SELECT b FROM Booking b WHERE " +
      "b.isDeleted = false AND " +
      "(:bookingId IS NULL OR b.bookingId LIKE CONCAT('%', :bookingId, '%')) AND " +
      "(:customerIds IS NULL OR (b.customer.customerId IN :customerIds AND b.customer.isDeleted = false)) AND " +
      "(:bookingCreateDates IS NULL OR FUNCTION('DATE', b.bookingCreateAt) IN :bookingCreateDates)")
  Page<Booking> searchBookings(@Param("bookingId") String bookingId,
      @Param("customerIds") List<String> customerIds,
      @Param("bookingCreateDates") List<LocalDate> bookingCreateDates,
      Pageable pageable);

  @Query("SELECT COUNT(b) FROM Booking b WHERE " +
      "b.isDeleted = false AND " +
      "(:bookingId IS NULL OR b.bookingId LIKE CONCAT('%', :bookingId, '%')) AND " +
      "(:customerIds IS NULL OR (b.customer.customerId IN :customerIds AND b.customer.isDeleted = false)) AND " +
      "(:bookingCreateDates IS NULL OR FUNCTION('DATE', b.bookingCreateAt) IN :bookingCreateDates)")
  long countBookings(@Param("bookingId") String bookingId,
      @Param("customerIds") List<String> customerIds,
      @Param("bookingCreateDates") List<LocalDate> bookingCreateDates);
}

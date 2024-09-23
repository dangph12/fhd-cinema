package com.company.project.tickets.service;

import java.util.List;

import com.company.project.tickets.common.TicketStatusCode;
import com.company.project.tickets.dto.request.TicketCreationRequest;
import com.company.project.tickets.entity.Ticket;
import com.company.project.tickets.exception.TicketException;
import com.company.project.tickets.repository.TicketRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService{

  @Autowired
  private TicketRepository ticketRepository;

  public List<Ticket> getAllTickets() {
    return ticketRepository.findAll();
  }

  public Ticket createTicket(TicketCreationRequest request) {
    Ticket ticket = new Ticket();
    
    ticket.setSeatId(request.getSeatId());
    ticket.setBookingId(request.getBookingId());
    ticket.setTicketPrice(request.getTicketPrice());
    
    return ticketRepository.save(ticket);
  }

  public Ticket updateTicket(String ticketId, TicketCreationRequest request) {
    if (!ticketRepository.existsByTicketId(ticketId)) {
        throw new TicketException(TicketStatusCode.NOT_EXIST);
    }

    Ticket existingTicket = ticketRepository.findById(ticketId)
            .orElseThrow(() -> new TicketException(TicketStatusCode.NOT_EXIST));
   
    existingTicket.setSeatId(request.getSeatId());
    existingTicket.setBookingId(request.getBookingId());
    existingTicket.setTicketPrice(request.getTicketPrice());

    return ticketRepository.save(existingTicket);
  }

  public void deleteTicketById(String ticketId) {
    if (!ticketRepository.existsByTicketId(ticketId)) {
      throw new TicketException(TicketStatusCode.NOT_EXIST);
    }

    ticketRepository.deleteById(ticketId);
  }

}

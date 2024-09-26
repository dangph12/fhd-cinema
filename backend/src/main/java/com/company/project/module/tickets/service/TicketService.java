package com.company.project.module.tickets.service;

import java.util.List;

import com.company.project.module.tickets.common.TicketStatusMessage;
import com.company.project.module.tickets.dto.request.TicketCreationRequest;
import com.company.project.module.tickets.entity.Ticket;
import com.company.project.module.tickets.exception.TicketException;
import com.company.project.module.tickets.repository.TicketRepository;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class TicketService{

  private final TicketRepository ticketRepository;

  public TicketService(TicketRepository ticketRepository) {
    this.ticketRepository = ticketRepository;
  }

  public List<Ticket> getAllTickets() {
    return ticketRepository.findAll();
  }

  public Ticket createTicket(TicketCreationRequest request) {
    Ticket ticket = new Ticket();
    
    ticket.setTicketPrice(request.getTicketPrice());
    
    return ticketRepository.save(ticket);
  }

  public Ticket updateTicket(String ticketId, TicketCreationRequest request) {
    if (!ticketRepository.existsByTicketId(ticketId)) {
        throw new TicketException(HttpStatus.NOT_FOUND.value(), TicketStatusMessage.NOT_EXIST.getMessage());
    }

    Ticket existingTicket = ticketRepository.findById(ticketId)
            .orElseThrow(() -> new TicketException(HttpStatus.NOT_FOUND.value(), TicketStatusMessage.NOT_EXIST.getMessage()));
   
    existingTicket.setTicketPrice(request.getTicketPrice());

    return ticketRepository.save(existingTicket);
  }

  public void deleteTicketById(String ticketId) {
    if (!ticketRepository.existsByTicketId(ticketId)) {
      throw new TicketException(HttpStatus.NOT_FOUND.value(), TicketStatusMessage.NOT_EXIST.getMessage());
    }

    ticketRepository.deleteById(ticketId);
  }

}

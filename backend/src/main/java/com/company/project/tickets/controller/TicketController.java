package com.company.project.tickets.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.tickets.common.TicketStatusCode;
import com.company.project.tickets.dto.request.TicketApiResponse;
import com.company.project.tickets.dto.request.TicketCreationRequest;
import com.company.project.tickets.entity.Ticket;
import com.company.project.tickets.service.TicketService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tickets")
public class TicketController {
  
  @Autowired
  private TicketService ticketService;

  @GetMapping
  List<Ticket> getAllTickets() {
    return ticketService.getAllTickets();
  }

  @PostMapping
  TicketApiResponse<Ticket> addTicket(@RequestBody @Valid TicketCreationRequest request) {
    TicketApiResponse<Ticket> ticketApiResponse = new TicketApiResponse<>();
    
    Ticket ticket = ticketService.createTicket(request);
    
    ticketApiResponse.setResult(ticket);

    return ticketApiResponse;
  }

  @PutMapping("/{ticketId}")
  TicketApiResponse<Ticket> updateTicket(
    @PathVariable(name = "ticketId") String ticketId, 
    @RequestBody @Valid TicketCreationRequest request) {

    Ticket ticket = ticketService.updateTicket(ticketId, request);
    
    TicketApiResponse<Ticket> ticketApiResponse = new TicketApiResponse<>();
    TicketStatusCode code = TicketStatusCode.UPDATE_SUCCESS;
    ticketApiResponse.setCode(code.getCode());
    ticketApiResponse.setMessage(code.getMessage());
    ticketApiResponse.setResult(ticket);

    return ticketApiResponse;
  }

  @DeleteMapping("/{ticketId}")
  TicketApiResponse<Void> deleteTicket(@PathVariable(name = "ticketId") String ticketId) {
    ticketService.deleteTicketById(ticketId);

    TicketApiResponse<Void> ticketApiResponse = new TicketApiResponse<>();
    TicketStatusCode code = TicketStatusCode.DELETE_SUCCESS;
    ticketApiResponse.setCode(code.getCode());
    ticketApiResponse.setMessage(code.getMessage());

    return ticketApiResponse;
  }

}

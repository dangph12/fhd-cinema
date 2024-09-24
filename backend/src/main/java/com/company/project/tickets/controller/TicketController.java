package com.company.project.tickets.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.tickets.common.TicketStatusMessage;
import com.company.project.tickets.dto.request.TicketApiResponse;
import com.company.project.tickets.dto.request.TicketCreationRequest;
import com.company.project.tickets.entity.Ticket;
import com.company.project.tickets.service.TicketService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tickets")
public class TicketController {
  
  private final TicketService ticketService;

  public TicketController(TicketService ticketService) {
    this.ticketService = ticketService;
  }

  @GetMapping
  ResponseEntity<TicketApiResponse<List<Ticket>>> getAllTickets() {

    return ResponseEntity.status(HttpStatus.OK.value()).body(TicketApiResponse.<List<Ticket>>builder()
            .code(HttpStatus.OK.value())
            .message(TicketStatusMessage.GET_SUCCESS.getMessage())
            .result(ticketService.getAllTickets())
            .build());
  }

  @PostMapping
  ResponseEntity<TicketApiResponse<Ticket>> addTicket(@RequestBody @Valid TicketCreationRequest request) {
    
    Ticket ticket = ticketService.createTicket(request);

    return ResponseEntity.status(HttpStatus.CREATED.value())
            .body(TicketApiResponse.<Ticket>builder()
                    .code(HttpStatus.CREATED.value())
                    .message(TicketStatusMessage.CREATE_SUCCESS.getMessage())
                    .result(ticket)
                    .build());
  }

  @PutMapping("/{ticketId}")
  ResponseEntity<TicketApiResponse<Ticket>> updateTicket(
    @PathVariable(name = "ticketId") String ticketId, 
    @RequestBody @Valid TicketCreationRequest request) {

    Ticket ticket = ticketService.updateTicket(ticketId, request);

      return ResponseEntity.status(HttpStatus.OK.value())
              .body(TicketApiResponse.<Ticket>builder()
                      .code(HttpStatus.OK.value())
                      .message(TicketStatusMessage.UPDATE_SUCCESS.getMessage())
                      .result(ticket)
                      .build());
  }

  @DeleteMapping("/{ticketId}")
  ResponseEntity<TicketApiResponse<Void>> deleteTicket(@PathVariable(name = "ticketId") String ticketId) {
    ticketService.deleteTicketById(ticketId);

    return ResponseEntity.status(HttpStatus.OK.value())
            .body(TicketApiResponse.<Void>builder()
            .code(HttpStatus.OK.value())
            .message(TicketStatusMessage.DELETE_SUCCESS.getMessage())
            .build());
  }

}

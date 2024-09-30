package com.company.project.module.tickets.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.tickets.common.TicketStatusMessage;
import com.company.project.module.tickets.dto.request.TicketCreationRequest;
import com.company.project.module.tickets.entity.Ticket;
import com.company.project.module.tickets.service.TicketService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
  
  private final TicketService ticketService;

  public TicketController(TicketService ticketService) {
    this.ticketService = ticketService;
  }

  @GetMapping
  ResponseEntity<ApiResponse<List<Ticket>>> getAllTickets() {

    return ResponseEntity.status(HttpStatus.OK.value()).body(ApiResponse.<List<Ticket>>builder()
            .status(Status.SUCCESS.getValue())
            .message(TicketStatusMessage.GET_SUCCESS.getMessage())
            .data(ticketService.getAllTickets())
            .build());
  }

  @GetMapping("/{ticketId}")
  ResponseEntity<ApiResponse<Ticket>> getTicketById(@PathVariable(name = "ticketId") String ticketId) {
    Ticket ticket = ticketService.getTicketById(ticketId);

    return ResponseEntity.status(HttpStatus.OK.value())
        .body(ApiResponse.<Ticket>builder()
            .status(Status.SUCCESS.getValue())
            .message(TicketStatusMessage.GET_SUCCESS.getMessage())
            .data(ticket)
            .build());
  }

  @PostMapping
  ResponseEntity<ApiResponse<Ticket>> addTicket(
    @RequestBody @Valid TicketCreationRequest request) {
    Ticket ticket = ticketService.createTicket(request);

    return ResponseEntity.status(HttpStatus.CREATED.value())
            .body(ApiResponse.<Ticket>builder()
                    .status(Status.SUCCESS.getValue())
                    .message(TicketStatusMessage.CREATE_SUCCESS.getMessage())
                    .data(ticket)
                    .build());
  }

  @PutMapping("/{ticketId}")
  ResponseEntity<ApiResponse<Ticket>> updateTicket(
    @PathVariable(name = "ticketId") String ticketId, 
    @RequestBody @Valid TicketCreationRequest request) {
    Ticket ticket = ticketService.updateTicket(ticketId, request);

      return ResponseEntity.status(HttpStatus.OK.value())
              .body(ApiResponse.<Ticket>builder()
                      .status(Status.SUCCESS.getValue())
                      .message(TicketStatusMessage.UPDATE_SUCCESS.getMessage())
                      .data(ticket)
                      .build());
  }

  @DeleteMapping("/{ticketId}")
  ResponseEntity<ApiResponse<Void>> deleteTicket(
    @PathVariable(name = "ticketId") String ticketId) {
    ticketService.deleteTicketById(ticketId);

    return ResponseEntity.status(HttpStatus.OK.value())
            .body(ApiResponse.<Void>builder()
                      .status(Status.SUCCESS.getValue())
                      .message(TicketStatusMessage.DELETE_SUCCESS.getMessage())
                      .build());
  }

}

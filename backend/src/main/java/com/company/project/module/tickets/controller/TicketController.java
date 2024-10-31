package com.company.project.module.tickets.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.tickets.common.TicketStatusMessage;
import com.company.project.module.tickets.dto.request.TicketCreationRequest;
import com.company.project.module.tickets.dto.response.TicketDto;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tickets")
public class TicketController {
  
  private final TicketService ticketService;

  public TicketController(TicketService ticketService) {
    this.ticketService = ticketService;
  }

  @GetMapping
  ResponseEntity<ApiResponse<List<TicketDto>>> getAllTickets() {
    return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.<List<TicketDto>>builder()
            .status(Status.SUCCESS.getValue())
            .message(TicketStatusMessage.GET_SUCCESS.getMessage())
            .data(ticketService.getAllTickets())
            .build());
  }

  @GetMapping("/{ticketId}")
  ResponseEntity<ApiResponse<TicketDto>> getTicketById(@PathVariable(name = "ticketId") String ticketId) {
    TicketDto ticketDto = ticketService.getTicketDtoById(ticketId);

    return ResponseEntity.status(HttpStatus.OK)
        .body(ApiResponse.<TicketDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(TicketStatusMessage.GET_SUCCESS.getMessage())
            .data(ticketDto)
            .build());
  }

  @PostMapping
  ResponseEntity<ApiResponse<TicketDto>> addTicket(
    @RequestBody @Valid TicketCreationRequest request) {
    TicketDto ticketDto = ticketService.createTicket(request);

    return ResponseEntity.status(HttpStatus.CREATED)
            .body(ApiResponse.<TicketDto>builder()
                    .status(Status.SUCCESS.getValue())
                    .message(TicketStatusMessage.CREATE_SUCCESS.getMessage())
                    .data(ticketDto)
                    .build());
  }

  @PutMapping("/{ticketId}")
  ResponseEntity<ApiResponse<TicketDto>> updateTicket(
    @PathVariable(name = "ticketId") String ticketId, 
    @RequestBody @Valid TicketCreationRequest request) {
    TicketDto ticketDto = ticketService.updateTicket(ticketId, request);

    return ResponseEntity.status(HttpStatus.OK)
            .body(ApiResponse.<TicketDto>builder()
                    .status(Status.SUCCESS.getValue())
                    .message(TicketStatusMessage.UPDATE_SUCCESS.getMessage())
                    .data(ticketDto)
                    .build());
  }

  @DeleteMapping("/{ticketId}")
  ResponseEntity<ApiResponse<Void>> deleteTicket(
    @PathVariable(name = "ticketId") String ticketId) {
    ticketService.deleteTicketById(ticketId);

    return ResponseEntity.status(HttpStatus.OK)
            .body(ApiResponse.<Void>builder()
                    .status(Status.SUCCESS.getValue())
                    .message(TicketStatusMessage.DELETE_SUCCESS.getMessage())
                    .build());
  }

  @GetMapping(params = "search")
  ResponseEntity<ApiResponse<ApiPagination<TicketDto>>> filterTickets(
      @RequestParam(value = "search") String search,
      @RequestParam(value = "page", defaultValue = "1") int page,
      @RequestParam(value = "sortBy", defaultValue = "ticketCreateAt") String sortBy, 
      @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
      @RequestParam(value = "pageSize", defaultValue = "2") int pageSize) {
    return ResponseEntity.ok().body(ApiResponse.<ApiPagination<TicketDto>>builder()
            .status(Status.SUCCESS.getValue())
            .message(TicketStatusMessage.GET_SUCCESS.getMessage())
            .data(ticketService.filterTickets(search, page, pageSize, sortBy, sortDirection))
            .build());
  }
}

package com.company.project.module.locations.repository;

import com.company.project.module.locations.entity.Location;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, String> {
    boolean existsByLocationName(String locationName);
    boolean existsByLocationId(String locationId);
    Page<Location> findByLocationNameContainingIgnoreCase(String locationName, Pageable pageable);
    long countByLocationNameContainingIgnoreCase(String locationName);
}

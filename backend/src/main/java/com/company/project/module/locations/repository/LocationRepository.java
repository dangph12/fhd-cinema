package com.company.project.module.locations.repository;

import com.company.project.module.locations.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, String> {
    boolean existsByLocationName(String locationName);
    boolean existsByLocationId(String locationId);
}

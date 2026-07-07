package com.flowsense.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flowsense.backend.entity.JourneyEvent;

@Repository
public interface JourneyEventRepository extends JpaRepository<JourneyEvent, Long> {

}
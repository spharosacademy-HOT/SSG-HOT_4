package com.ssghot.ssg.event.repository;

import com.ssghot.ssg.event.domain.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEventRepository extends JpaRepository<Event, Long> {
}

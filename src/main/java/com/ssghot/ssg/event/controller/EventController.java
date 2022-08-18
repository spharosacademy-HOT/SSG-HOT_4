package com.ssghot.ssg.event.controller;

import com.ssghot.ssg.event.domain.Event;
import com.ssghot.ssg.event.dto.EventDtoInput;
import com.ssghot.ssg.event.dto.EventDtoOutput;
import com.ssghot.ssg.event.service.IEventService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/ssghot")
public class EventController {

    private final IEventService iEventService;

    /*
        1. 이벤트 등록하기
        2. 이벤트 수정하기
        3. 이벤트 삭제하기
        4. 이벤트 전체 조회하기
        5. 이벤트 단건 조회하기
     */

    // 1. 이벤트 등록하기
    @PostMapping("/event")
    public Event addEvent(@RequestBody EventDtoInput eventDtoInput){
        return iEventService.addEvent(eventDtoInput);
    }

    // 2. 이벤트 수정하기
    @PutMapping("/event")
    public Event editEvent(@PathVariable Long id, @RequestBody EventDtoInput eventDtoInput){
        return iEventService.editEvent(id, eventDtoInput);
    }

    // 3. 이벤트 삭제하기

    // 4. 이벤트 전체 조회하기
    @GetMapping("/event")
    public List<EventDtoOutput> getAllEvent(){
        return iEventService.getAllEvent();
    }

    // 5. 이벤트 단건 조회하기
    @GetMapping("/event/{id}")
    public EventDtoOutput getOneEvent(@PathVariable Long id){
        return iEventService.getOneEvent(id);
    }
}

package com.ssghot.ssg.event.service;

import com.ssghot.ssg.event.domain.Event;
import com.ssghot.ssg.event.dto.EventDtoInput;
import com.ssghot.ssg.event.dto.EventDtoOutput;

import java.util.List;

public interface IEventService {

    /*
        1. 이벤트 등록하기
        2. 이벤트 수정하기
        3. 이벤트 삭제하기
        4. 이벤트 전체 조회하기
        5. 이벤트 단건 조회하기
     */

    // 1. 이벤트 등록하기
    Event addEvent(EventDtoInput eventDtoInput);

    // 2. 이벤트 수정하기
    Event editEvent(Long id,EventDtoInput eventDtoInput);

    // 3. 이벤트 삭제하기

    // 4. 이벤트 전체 조회하기
    List<EventDtoOutput> getAllEvent();

    // 5. 이벤트 단건 조회하기
    EventDtoOutput getOneEvent(Long id);
}

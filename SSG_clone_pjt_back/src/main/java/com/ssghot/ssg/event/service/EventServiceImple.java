package com.ssghot.ssg.event.service;

import com.ssghot.ssg.event.domain.Event;
import com.ssghot.ssg.event.dto.EventDtoInput;
import com.ssghot.ssg.event.dto.EventDtoOutput;
import com.ssghot.ssg.event.repository.IEventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EventServiceImple implements IEventService{

    private final IEventRepository iEventRepository;

    /*
        1. 이벤트 등록하기
        2. 이벤트 수정하기
        3. 이벤트 삭제하기
        4. 이벤트 전체 조회하기
        5. 이벤트 단건 조회하기
     */

    // 1. 이벤트 등록하기
    @Override
    public Event addEvent(EventDtoInput eventDtoInput) {

        Event event = Event.builder()
                .title(eventDtoInput.getTitle())
                .content(eventDtoInput.getContent())
                .imgUrl(eventDtoInput.getImgUrl())
                .imgUrl2(eventDtoInput.getImgUrl2())
                .startDate(eventDtoInput.getStartDate())
                .endDate(eventDtoInput.getEndDate())
                .user(eventDtoInput.getUser())
                .build();

        return iEventRepository.save(event);
    }

    // 2. 이벤트 수정하기
    @Override
    public Event editEvent(Long id, EventDtoInput eventDtoInput) {
        Optional<Event> event = iEventRepository.findById(id);
        if(event.isPresent()){
            return iEventRepository.save(
                    Event.builder()
                    .id(id)
                    .title(eventDtoInput.getTitle())
                    .content(eventDtoInput.getContent())
                    .imgUrl(eventDtoInput.getImgUrl())
                    .imgUrl2(eventDtoInput.getImgUrl2())
                    .startDate(eventDtoInput.getStartDate())
                    .endDate(eventDtoInput.getEndDate())
                    .user(eventDtoInput.getUser())
                    .build()
            );
        }

        return null;
    }

    // 4. 이벤트 전체 조회하기
    @Override
    public List<EventDtoOutput> getAllEvent() {
        List<Event> eventList = iEventRepository.findAll();
        List<EventDtoOutput> eventDtoOutputList = new ArrayList<>();

        eventList.forEach(event -> {
            eventDtoOutputList.add(
                    EventDtoOutput.builder()
                            .id(event.getId())
                            .title(event.getTitle())
                            .content(event.getContent())
                            .imgUrl(event.getImgUrl())
                            .imgUrl2(event.getImgUrl2())
                            .startDate(event.getStartDate())
                            .endDate(event.getEndDate())
                            .userId(1L)
                            .build()
            );
        });

        return eventDtoOutputList;
    }

    // 5. 이벤트 단건 조회하기
    @Override
    public EventDtoOutput getOneEvent(Long id) {
        Optional<Event> event = iEventRepository.findById(id);
        if(event.isPresent()){
            return EventDtoOutput.builder()
                    .id(event.get().getId())
                    .title(event.get().getTitle())
                    .imgUrl(event.get().getImgUrl())
                    .imgUrl2(event.get().getImgUrl2())
                    .startDate(event.get().getStartDate())
                    .endDate(event.get().getEndDate())
                    .userId(1L)
                    .build();
        }
        return null;
    }
}

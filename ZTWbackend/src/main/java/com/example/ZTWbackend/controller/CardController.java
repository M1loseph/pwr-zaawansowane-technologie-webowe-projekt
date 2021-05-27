package com.example.ZTWbackend.controller;

import com.example.ZTWbackend.exceptions.ResourceNotFoundException;
import com.example.ZTWbackend.model.*;
import com.example.ZTWbackend.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/")
public class CardController {
    @Autowired
    private CardRepository cardRepository;

    @GetMapping("card")
    public List<CardModel> getCard(){
        return this.cardRepository.findAll();
    }

    @GetMapping("/card/{id}")
    public ResponseEntity<CardModel> getCardId(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {
        CardModel card = cardRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Card not found::"+userId ));
        return ResponseEntity.ok().body(card);
    }
    @PostMapping("card")
    public CardModel createCard(@RequestBody CardModel card){
        return this.cardRepository.save(card);
    }

    @PutMapping("card/{id}")
    public ResponseEntity<CardModel> updateCard(@PathVariable(value = "id") Long boardId,
                                                @Valid @RequestBody CardModel cardDetails) throws ResourceNotFoundException {

        CardModel card = cardRepository.findById(boardId)
                .orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));

        card.setCardTitle(cardDetails.getCardTitle());
        card.setDescription(cardDetails.getDescription());
        card.setData(cardDetails.getData());

        return ResponseEntity.ok(this.cardRepository.save(card));
    }

    @PostMapping("card/addLabel/{id}")
    public CardModel addLabel(@PathVariable(value = "id") Long cardID, @RequestBody LabelModel label) throws ResourceNotFoundException{

        CardModel card = cardRepository.findById(cardID)
                .orElseThrow(() -> new ResourceNotFoundException("BoarderColumn not found::" + cardID));

        card.getLabeList().add(label);
        label.getCardList().add(card);

        return this.cardRepository.save(card);
    }

    @DeleteMapping("card/{id}")
    public Map<String, Boolean> deleteCard(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException{

        CardModel card = cardRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found::"+userId));

        this.cardRepository.delete(card);
        
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}

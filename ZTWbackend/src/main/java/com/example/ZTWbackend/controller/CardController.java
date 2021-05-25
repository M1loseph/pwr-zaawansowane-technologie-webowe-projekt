package com.example.ZTWbackend.controller;

import com.example.ZTWbackend.exceptions.ResourceNotFoundException;
import com.example.ZTWbackend.model.*;
import com.example.ZTWbackend.repository.CardRepository;
import com.example.ZTWbackend.repository.LabelRepository;
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
    public List<Card> getCard(){
        return this.cardRepository.findAll();
    }

    @GetMapping("/card/{id}")
    public ResponseEntity<Card> getCardId(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {
        Card card = cardRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Card not found::"+userId ));
        return ResponseEntity.ok().body(card);
    }
    @PostMapping("card")
    public Card createCard(@RequestBody Card card){
        return this.cardRepository.save(card);
    }

    @PutMapping("card/{id}")
    public ResponseEntity<Card> updateCard(@PathVariable(value = "id") Long boardId,
                                             @Valid @RequestBody Card  cardDetails) throws ResourceNotFoundException {

        Card card = cardRepository.findById(boardId)
                .orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));

        card.setCardTitle(cardDetails.getCardTitle());
        card.setDescription(cardDetails.getDescription());
        card.setData(cardDetails.getData());

        return ResponseEntity.ok(this.cardRepository.save(card));
    }

    @PostMapping("card/addLabel/{id}")
    public Card addLabel(@PathVariable(value = "id") Long cardID, @RequestBody Label label) throws ResourceNotFoundException{

        Card card = cardRepository.findById(cardID)
                .orElseThrow(() -> new ResourceNotFoundException("BoarderColumn not found::" + cardID));

        card.getLabeList().add(label);
        label.getCardList().add(card);

        return this.cardRepository.save(card);
    }

    @DeleteMapping("card/{id}")
    public Map<String, Boolean> deleteCard(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException{

        Card card = cardRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found::"+userId));

        this.cardRepository.delete(card);
        
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}

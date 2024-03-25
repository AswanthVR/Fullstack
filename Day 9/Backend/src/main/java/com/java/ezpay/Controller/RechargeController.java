package com.java.ezpay.Controller;

import com.java.ezpay.model.Recharge;

import lombok.RequiredArgsConstructor;

import com.java.ezpay.Service.RechargeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recharge")
@RequiredArgsConstructor
public class RechargeController {

     
    private final RechargeService rechargeService;

    @PostMapping
    public ResponseEntity<Recharge> createRecharge(@RequestBody Recharge recharge) {
        Recharge createdRecharge = rechargeService.saveRecharge(recharge);
        return new ResponseEntity<>(createdRecharge, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recharge> getRechargeById(@PathVariable Long id) {
        Recharge recharge = rechargeService.getRechargeById(id);
        return ResponseEntity.ok(recharge);
    }

    @GetMapping
    public ResponseEntity<List<Recharge>> getAllRecharges() {
        List<Recharge> recharges = rechargeService.getAllRecharges();
        return ResponseEntity.ok(recharges);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecharge(@PathVariable Long id) {
        rechargeService.deleteRecharge(id);
        return ResponseEntity.noContent().build();
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgumentException(IllegalArgumentException ex) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("Error: " + ex.getMessage());
    }
}
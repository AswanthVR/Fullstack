package com.java.ezpay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.ezpay.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, String>{
    
}

package com.java.ezpay.Service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.ezpay.Repository.PaymentRepository;
import com.java.ezpay.Service.PaymentService;
import com.java.ezpay.model.Payment;

import io.swagger.v3.oas.annotations.servers.Server;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;

    @Override
    public Payment createPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    @Override
    public Payment getPaymentById(String id) {
        Optional<Payment> optionalPayment = paymentRepository.findById(id);
        return optionalPayment.orElseThrow(() -> new IllegalArgumentException("Payment not found for id: " + id));
    }

    @Override
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    @Override
    public Payment updatePayment(String id, Payment payment) {
        if (!paymentRepository.existsById(id)) {
            throw new IllegalArgumentException("Payment not found for id: " + id);
        }
        payment.setPaymentId(id); // Ensure the correct ID is set
        return paymentRepository.save(payment);
    }

    @Override
    public void deletePayment(String id) {
        if (!paymentRepository.existsById(id)) {
            throw new IllegalArgumentException("Payment not found for id: " + id);
        }
        paymentRepository.deleteById(id);
    }
}
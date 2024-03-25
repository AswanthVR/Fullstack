package com.java.ezpay.Service;

import java.util.List;

import com.java.ezpay.model.Payment;

public interface PaymentService {
    Payment createPayment(Payment payment);

    Payment getPaymentById(String id);

    List<Payment> getAllPayments();

    Payment updatePayment(String id, Payment payment);

    void deletePayment(String id);
}

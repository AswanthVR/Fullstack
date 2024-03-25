package com.java.ezpay.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.ezpay.Service.PlanService;
import com.java.ezpay.model.Plan;

import lombok.RequiredArgsConstructor;
import lombok.val;

@RestController
@RequiredArgsConstructor
@RequestMapping("ezpay/api/v1/plans")
public class PlanController {

    private final PlanService planService;

    @GetMapping
    public ResponseEntity<List<Plan>> getAllPlans(){
        List<Plan> plans = planService.getAllPlans();
        return ResponseEntity.ok(plans);
    }

    @GetMapping("/{planId}")
    public ResponseEntity<Plan> getPlanById(@PathVariable String planId){

        Optional<Plan> plan = planService.getPlanById(planId);
        return plan.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping()
    public ResponseEntity<Plan> createPLan(@RequestBody Plan plan){
        Plan createdPlan = planService.createPlan(plan);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPlan);
    }

    @DeleteMapping("/{planId}")
    public ResponseEntity<String> delete(@PathVariable String planId){
        planService.deletePlan(planId);
        return ResponseEntity.ok("Plan deleted successfully");
    }

    @PutMapping("/{planId}")
    public ResponseEntity<Plan> updatePlan(@PathVariable String planId, @RequestBody Plan plan){
        var updatedPlan = planService.updatePlan(planId, plan);
        return updatedPlan.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    
}

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

import com.java.ezpay.Service.AddonService;
import com.java.ezpay.model.Addon;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("ezpay/api/v1/addons")
public class AddonController {

    private final AddonService addonService;

    @GetMapping
    public ResponseEntity<List<Addon>> getAllAddons() {
        List<Addon> addons = addonService.getAllAddons();
        return ResponseEntity.ok(addons);
    }

    @GetMapping("/{addonId}")
    public ResponseEntity<Addon> getAddonById(@PathVariable String addonId) {
        Optional<Addon> addon = addonService.getAddonById(addonId);
        return addon.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Addon> createAddon(@RequestBody Addon addon) {
        Addon createdAddon = addonService.createAddon(addon);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAddon);
    }

    @DeleteMapping("/{addonId}")
    public ResponseEntity<String> deleteAddon(@PathVariable String addonId) {
        addonService.deleteAddon(addonId);
        return ResponseEntity.ok("Addon deleted successfully");
    }

    @PutMapping("/{addonId}")
    public ResponseEntity<Addon> updateAddon(@PathVariable String addonId, @RequestBody Addon addon) {
        Optional<Addon> updatedAddon = addonService.updateAddon(addonId, addon);
        return updatedAddon.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}

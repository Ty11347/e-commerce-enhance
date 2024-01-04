package com.cbse.encorethread.controller;

import com.cbse.encorethread.model.Products;
import com.cbse.encorethread.service.AdminService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/products")
    public Products addProduct(@RequestBody Products product) {
        return adminService.addProduct(product);
    }

    @PutMapping("/products/{id}")
    public Products updateProduct(@PathVariable Integer id, @RequestBody Products product) {
        return adminService.updateProduct(id, product);
    }

    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable Integer id) {
        adminService.deleteProduct(id);
    }
}

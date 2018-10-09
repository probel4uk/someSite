package com.lacit.someSite.controller;

import com.lacit.someSite.domain.Product;
import com.lacit.someSite.domain.ProductService;
import com.lacit.someSite.domain.User;
import com.lacit.someSite.domain.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DetailsController {
    @Autowired
    UserService userService;

    @Autowired
    ProductService productService;


    @RequestMapping("/details")
    public String getProduct(@RequestParam(name = "id", required = false, defaultValue = "0") int id, Model model) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        try {
            User user = (User) auth.getPrincipal();
//            model.addAttribute("username", user.getUsername());
//            model.addAttribute("role", user.getAuthorities().stream().map(Role::getAuthority).collect(joining(",")));

            model.addAttribute("user", user);

        } catch (Exception e) {


        }
        Product product = productService.findProductById(id);
        model.addAttribute("product", product);


        return "details";
    }


}
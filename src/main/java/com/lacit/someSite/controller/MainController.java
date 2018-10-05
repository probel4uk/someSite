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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class MainController {
    @Autowired
    UserService userService;

    @Autowired
    ProductService productService;

    @GetMapping("/greeting")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }


    @RequestMapping("/")
    public String getIndexx(Model model) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        try {
            User user = (User) auth.getPrincipal();
//            model.addAttribute("username", user.getUsername());
//            model.addAttribute("role", user.getAuthorities().stream().map(Role::getAuthority).collect(joining(",")));

            model.addAttribute("user", user);

        } catch (Exception e) {


        }
        List<Product> products = productService.getProductForCarousel(4);
        model.addAttribute("products", products);


        return "index";
    }





}
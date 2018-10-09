package com.lacit.someSite.domain;

import com.lacit.someSite.repos.ProductRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Data
@Service("productService")
public class ProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product findProductById(int id) {
        return productRepository.findById(id);
    }

    public List<Product> getProductForCarousel(int size) {
        ArrayList<Product> products = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            products.add(productRepository.findById(i));
        }
        return products;
    }

    public List<Product> getProducts(String name) {
        name = name.trim();
        if (name.equals("")) {
            return productRepository.findAll();
        } else
            return productRepository.findByName(name);

    }




}

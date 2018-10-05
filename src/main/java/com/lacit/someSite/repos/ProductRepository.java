package com.lacit.someSite.repos;

import com.lacit.someSite.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository("productRepository")
public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findById(int id);
}

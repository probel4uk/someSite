package com.lacit.someSite.repos;

import com.lacit.someSite.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository("productRepository")
public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findById(int id);

    @Query(nativeQuery = true, value = "SELECT * FROM products WHERE name like %:seance%")
    List<Product> findByName(@Param("seance") String seance);

    List<Product> findAll();


}

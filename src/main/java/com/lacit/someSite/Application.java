package com.lacit.someSite;

import com.lacit.someSite.dbLoader.AutomateImport;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);


//
//        File file = new File("db/products.txt");
//        String path= file.getAbsolutePath();
//        path=path.replaceAll("\\\\","/");

        //"D:/SpringProjects/someSite/src/main/resources/db/products.txt"
        AutomateImport.createProducts("D:/SpringProjects/someSite/src/main/resources/db/products.txt");
    }


}
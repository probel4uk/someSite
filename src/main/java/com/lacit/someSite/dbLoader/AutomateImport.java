package com.lacit.someSite.dbLoader;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class AutomateImport {
    public static void createProducts(String path) {
        DBase db = new DBase();
        Connection conn = db.connect(
                "jdbc:mysql://localhost:3306/someSite?useSSL=false", "root", "mmm333");
        db.importData(conn, path);
    }

}

class DBase {
    public DBase() {
    }

    public Connection connect(String db_connect_str,
                              String db_userid, String db_password) {
        Connection conn;
        try {
            Class.forName(
                    "com.mysql.jdbc.Driver").newInstance();

            conn = DriverManager.getConnection(db_connect_str,
                    db_userid, db_password);

        } catch (Exception e) {
            e.printStackTrace();
            conn = null;
        }

        return conn;
    }

    public void importData(Connection conn, String filename) {
        Statement stmt;
        String query;

        try {
            stmt = conn.createStatement(
                    ResultSet.TYPE_SCROLL_SENSITIVE,
                    ResultSet.CONCUR_UPDATABLE);

            query = "LOAD DATA LOCAL INFILE '" + filename +
                    "' INTO TABLE products FIELDS TERMINATED BY '; ' LINES TERMINATED BY '\\n'(product_id, name, price, img_url, characteristic);";

            stmt.executeUpdate(query);

        } catch (Exception e) {
            e.printStackTrace();
            stmt = null;
        }
    }
};

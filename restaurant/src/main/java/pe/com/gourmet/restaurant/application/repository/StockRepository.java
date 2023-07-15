package pe.com.gourmet.restaurant.application.repository;

import pe.com.gourmet.restaurant.domain.Product;
import pe.com.gourmet.restaurant.domain.Stock;

import java.util.List;

public interface StockRepository {
    Stock create(Stock stock, Long idProduct);
    List<Stock> getStocksProduct(Long idProduct);
}

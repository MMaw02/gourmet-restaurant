package pe.com.gourmet.restaurant.application.services;

import pe.com.gourmet.restaurant.application.services.StockService;
import pe.com.gourmet.restaurant.domain.Product;
import pe.com.gourmet.restaurant.domain.Stock;

import java.util.List;

public class ValidateStock {
    private  final StockService stockService;

    public ValidateStock(StockService stockService) {
        this.stockService = stockService;
    }

    private boolean existBalance(Product product) {
        List<Stock> stockList = stockService.getStocksProduct(product.getId());
        return !stockList.isEmpty();
    }

    public Stock calculateBalance(Stock stock) {
        if (stock.getUnitIn() != null) {
            if (existBalance(stock.getProduct())) {
                List<Stock> stockList = stockService.getStocksProduct(stock.getProduct().getId());
                Integer balance = stockList.get(stockList.size()-1).getBalance();
                stock.setBalance(balance + stock.getUnitIn());
            } else {
                stock.setBalance(stock.getUnitIn());
            }
        } else {
            List<Stock> stockList = stockService.getStocksProduct(stock.getProduct().getId());
            Integer balance = stockList.get(stockList.size() - 1).getBalance();
            stock.setBalance(balance - stock.getUnitOut());
        }

        return stock;
    }
}

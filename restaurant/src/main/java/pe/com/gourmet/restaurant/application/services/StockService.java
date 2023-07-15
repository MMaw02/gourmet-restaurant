package pe.com.gourmet.restaurant.application.services;

import pe.com.gourmet.restaurant.application.repository.StockRepository;
import pe.com.gourmet.restaurant.domain.Stock;

import java.util.List;

public class StockService {

    private final StockRepository stockRepository;

    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public Stock create(Stock stock, Long idProduct) {
        return stockRepository.create(stock, idProduct);
    }

//    Buscar los Stocks de un producto. El historia de entrada y salida.
    public List<Stock> getStocksProduct(Long idProduct) {
        return stockRepository.getStocksProduct(idProduct);
    }
}
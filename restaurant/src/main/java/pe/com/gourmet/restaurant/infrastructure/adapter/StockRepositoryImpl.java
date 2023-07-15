package pe.com.gourmet.restaurant.infrastructure.adapter;

import org.springframework.stereotype.Repository;
import pe.com.gourmet.restaurant.application.repository.StockRepository;
import pe.com.gourmet.restaurant.application.services.ValidateStock;
import pe.com.gourmet.restaurant.domain.Stock;
import pe.com.gourmet.restaurant.infrastructure.adapter.dao.ProductJpaRepository;
import pe.com.gourmet.restaurant.infrastructure.adapter.dao.StockJpaRepository;
import pe.com.gourmet.restaurant.infrastructure.entity.ProductEntity;
import pe.com.gourmet.restaurant.infrastructure.entity.StockEntity;
import pe.com.gourmet.restaurant.infrastructure.mapper.ProductMapper;
import pe.com.gourmet.restaurant.infrastructure.mapper.StockMapper;

import java.util.List;

@Repository
public class StockRepositoryImpl implements StockRepository {

    private final StockJpaRepository stockJpaRepository;
    private final ProductJpaRepository productJpaRepository;
    private final ProductMapper productMapper;
    private final StockMapper stockMapper;
//    private final ValidateStock validateStock;

    public StockRepositoryImpl(StockJpaRepository stockJpaRepository, ProductJpaRepository productJpaRepository, ProductMapper productMapper, StockMapper stockMapper) {
        this.stockJpaRepository = stockJpaRepository;
        this.productJpaRepository = productJpaRepository;
        this.productMapper = productMapper;
        this.stockMapper = stockMapper;
    }

    @Override
    public Stock create(Stock stock, Long idProduct) {
        ProductEntity productEntity = productJpaRepository.findById(idProduct).orElse(null);
        stock.setProduct(productMapper.ProductEntityToProduct(productEntity));

        List<StockEntity> stockList = stockJpaRepository.findByProduct(productEntity);
        if (!stockList.isEmpty()) {
            Integer balance = stockList.get(stockList.size()-1).getBalance();
            stock.setBalance(balance + stock.getUnitIn());
        } else {
            stock.setBalance(stock.getUnitIn());
        }
        stock.setDescription("Inventario");

        StockEntity stockEntity = stockJpaRepository.save(stockMapper.stockToStockEntity(stock));
        return stockMapper.stockEntityToStock(stockEntity);
    }

    @Override
    public List<Stock> getStocksProduct(Long idProduct) {
        ProductEntity productEntity = productJpaRepository.findById(idProduct).orElse(null);
        List<StockEntity> stockEntities = stockJpaRepository.findByProduct(productEntity);
        return stockMapper.stockEntitiesToStock(stockEntities);
    }

}

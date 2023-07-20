package pe.com.gourmet.restaurant.infrastructure.controller;

import org.springframework.web.bind.annotation.*;
import pe.com.gourmet.restaurant.application.services.StockService;
import pe.com.gourmet.restaurant.application.services.ValidateStock;
import pe.com.gourmet.restaurant.domain.Stock;

import java.util.List;

@RestController
@RequestMapping("/stock")
@CrossOrigin(originPatterns = "*")
public class StockController {

    private final StockService stockService;
    private final ValidateStock validateStock;

    public StockController(StockService stockService, ValidateStock validateStock) {
        this.stockService = stockService;
        this.validateStock = validateStock;
    }

    @GetMapping("/product/{idProduct}")
    public List<Stock> getStocksProduct(@PathVariable Long idProduct) {
        List<Stock> list = stockService.getStocksProduct(idProduct);

        return list;
    }

    @PostMapping("/admin/product/{idProduct}")
    public Stock create(@RequestBody Stock stock, @PathVariable Long idProduct) {

        return stockService.create(stock, idProduct);
    }
}

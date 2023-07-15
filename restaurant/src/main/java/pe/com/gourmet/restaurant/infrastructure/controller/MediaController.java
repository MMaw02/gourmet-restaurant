package pe.com.gourmet.restaurant.infrastructure.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pe.com.gourmet.restaurant.infrastructure.service.StorageService;

import java.io.IOException;
import java.nio.file.Files;
import java.util.Map;

@RestController
@RequestMapping("/media")
public class MediaController {

    @Autowired
    private StorageService storageService;

    @GetMapping("/{filename}")
    ResponseEntity<Resource> getResource(@PathVariable String filename) throws IOException {
        Resource resource = storageService.loadAsResource(filename);
        String contenType = Files.probeContentType(resource.getFile().toPath());
        return ResponseEntity
                .ok()
                .header(HttpHeaders.CONTENT_TYPE, contenType)
                .body(resource);
    }

    @PostMapping("/upload")
    Map<String, String> upload(@RequestParam(name = "file") MultipartFile multipartFile) {
        String path = storageService.store(multipartFile);
        return Map.of("path", path);
    }

    @DeleteMapping("/delete/{filename}")
    void delete(@PathVariable String filename) {
        storageService.delete(filename);
    }
}

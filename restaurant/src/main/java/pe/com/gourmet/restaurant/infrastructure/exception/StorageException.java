package pe.com.gourmet.restaurant.infrastructure.exception;

public class StorageException extends RuntimeException {

    public StorageException(String message) {
        super(message);
    }

    public StorageException(String message, Throwable ex) {
        super(message, ex);
    }
}

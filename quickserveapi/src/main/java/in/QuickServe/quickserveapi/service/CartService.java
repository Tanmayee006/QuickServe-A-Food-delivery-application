package in.QuickServe.quickserveapi.service;

import in.QuickServe.quickserveapi.io.CartRequest;
import in.QuickServe.quickserveapi.io.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request);

    CartResponse getCart();

    void clearCart();

    CartResponse removeFromCart(CartRequest cartRequest);
}

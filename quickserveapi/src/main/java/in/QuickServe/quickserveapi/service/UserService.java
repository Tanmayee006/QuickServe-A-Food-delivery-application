package in.QuickServe.quickserveapi.service;

import in.QuickServe.quickserveapi.io.UserRequest;
import in.QuickServe.quickserveapi.io.UserResponse;

public interface UserService {

    UserResponse registerUser(UserRequest request);

    String findByUserId();
}

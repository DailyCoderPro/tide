package com.tide.auth.contants;

public class AuthConstants {

    public static final String JWT_SECRET = "tide-jwt-secret";
    public static final long JWT_EXPIRATION_TIME = 864000000L; // 1 day
    public static final String JWT_TOKEN_PREFIX = "Bearer ";
    public static final String JWT_HEADER_STRING = "Authorization";
    public static final String JWT_REFRESH_TOKEN_PREFIX = "Refresh ";

    public static final String BASE_URL = "/api/v1/auth";
    public static final String LOGIN_URL = "/login";
    public static final String REGISTER_URL = "/register";
    public static final String REFRESH_TOKEN_URL = "/refresh-token";
    public static final String LOGOUT_URL = "/logout";
    public static final String USERS_URL = "/users";
    public static final String USER_URL = "/users/{userId}";
}

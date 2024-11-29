<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    // Allow specific HTTP methods
    'allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],

    // Replace '*' with your domain name
    'allowed_origins' => ['https://cyberix.io', 'https://www.cyberix.io'],

    // If you need to match a pattern, use allowed_origins_patterns
    'allowed_origins_patterns' => [],

    // Define the headers you want to allow
    'allowed_headers' => ['Content-Type', 'X-Requested-With', 'Authorization'],

    // Specify any headers that should be exposed to the browser
    'exposed_headers' => [],

    // Set max age for preflight requests
    'max_age' => 3600,

    // Set to true if cookies or authentication is required
    'supports_credentials' => false,

];

class Config {
  // Environment configuration
  static const Environment _environment = Environment.production;
  
  // URLs for different environments
  static const Map<Environment, String> _baseUrls = {
    Environment.development: 'http://localhost:8000',
    Environment.staging: 'https://staging.om-pay.com',
    Environment.production: 'https://om-pay-api-1.onrender.com',
  };
  
  static const String apiPrefix = '/api';
  static String get baseUrl => _baseUrls[_environment]!;
  
  // Current environment info
  static String get environmentName => _environment.name.toUpperCase();
  static bool get isProduction => _environment == Environment.production;
  static bool get isDevelopment => _environment == Environment.development;
}

enum Environment {
  development,
  staging,
  production,
}
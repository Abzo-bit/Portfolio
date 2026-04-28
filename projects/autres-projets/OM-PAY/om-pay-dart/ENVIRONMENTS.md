# OM-PAY Console Environment Configuration

## 🌐 Environments

### Development (Local)

- URL: `http://localhost:8000/api`
- Usage: Development and testing
- Database: Local SQLite/MySQL

### Staging

- URL: `https://staging.om-pay.com/api`
- Usage: Pre-production testing
- Database: Staging database

### Production

- URL: `https://om-pay-api-1.onrender.com/api`
- Usage: Live production environment (Render.com)
- Database: Production database

## 🔧 How to switch environments

Edit `lib/utils/config.dart` and change the `_environment` constant:

```dart
// For development
static const Environment _environment = Environment.development;

// For staging
static const Environment _environment = Environment.staging;

// For production
static const Environment _environment = Environment.production;
```

## 🚀 Production Deployment

1. Set environment to `Environment.production`
2. Update the production URL in `_baseUrls` (already set to: https://om-pay-api-1.onrender.com)
3. Test with `dart run` before deployment
4. Deploy to your production server

## 📱 Mobile App Configuration

The mobile app is also configured for production:
`om_pay_mobile/lib/services/api_service.dart`

```dart
static const String baseUrl = 'https://om-pay-api-1.onrender.com/api'; // Production
```

## 🔍 Debug Information

The console will show current environment on startup:

- Environment name
- API URL being used
- Production mode status

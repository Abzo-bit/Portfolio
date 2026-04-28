import '../entities/user.dart';
import 'api_service.dart';

class AuthService {
  final ApiService api;

  AuthService(this.api);

  Future<Map<String, dynamic>> initiateLogin(String phone) async {
    return await api.post('auth/initiate-login', {'phone_number': phone});
  }

  Future<Map<String, dynamic>> verifyOtp(String phone, String otp) async {
    return await api.post('auth/verify-otp', {'phone_number': phone, 'otp_code': otp});
  }

  Future<Map<String, dynamic>> register(Map<String, dynamic> userData) async {
    return await api.post('auth/register', userData);
  }

  Future<Map<String, dynamic>> completeLogin(String phone, String otp) async {
    return await api.post('auth/complete-login', {'phone_number': phone, 'otp_code': otp});
  }

  Future<Map<String, dynamic>> logout() async {
    return await api.post('auth/logout', {});
  }
}
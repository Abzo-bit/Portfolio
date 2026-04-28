import '../entities/account.dart';
import 'api_service.dart';

class AccountService {
  final ApiService api;

  AccountService(this.api);

  Future<Map<String, dynamic>> getAccountBalance(String accountNumber) async {
    return await api.get('comptes/$accountNumber/solde');
  }

  Future<Map<String, dynamic>> getAccountDashboard(String accountNumber) async {
    return await api.get('compte/$accountNumber/dashboard');
  }

  Future<Map<String, dynamic>> getAccountTransactions(String accountNumber) async {
    return await api.get('compte/$accountNumber/transactions');
  }
}
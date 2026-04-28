import '../entities/transaction.dart';
import 'api_service.dart';

class TransactionService {
  final ApiService api;

  TransactionService(this.api);

  // Transfer operations
  Future<Map<String, dynamic>> createTransfer(
      String accountNumber, Map<String, dynamic> transferData) async {
    return await api.post('compte/$accountNumber/transfert', transferData);
  }

  // Payment operations - use merchant_identifier instead of specific fields
  Future<Map<String, dynamic>> initiatePaymentToMerchant(
      String accountNumber, String merchantIdentifier, Map<String, dynamic> paymentData) async {
    return await api.post('compte/$accountNumber/payment', {
      ...paymentData,
      'merchant_identifier': merchantIdentifier,
    });
  }

  // Transaction operations
  Future<Map<String, dynamic>> getAccountTransactions(String accountNumber) async {
    return await api.get('compte/$accountNumber/transactions');
  }

  Future<Map<String, dynamic>> cancelTransaction(String transactionId) async {
    return await api.delete('transactions/$transactionId');
  }

  // Payment status and history
  Future<Map<String, dynamic>> checkPaymentStatus(
      Map<String, dynamic> statusData) async {
    return await api.post('payments/status', statusData);
  }

  Future<Map<String, dynamic>> getPaymentHistory() async {
    return await api.get('payments/history');
  }
}

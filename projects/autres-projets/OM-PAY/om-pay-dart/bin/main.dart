import 'dart:io';
import 'package:om_pay_console/services/api_service.dart';
import 'package:om_pay_console/services/auth_service.dart';
import 'package:om_pay_console/services/transaction_service.dart';
import 'package:om_pay_console/services/account_service.dart';
import 'package:om_pay_console/utils/config.dart';

Future<void> main() async {
  print('🚀 OM-PAY Console Application');
  print('=' * 50);
  print('📍 Environment: ${Config.environmentName}');
  print('🔗 API URL: ${Config.baseUrl}${Config.apiPrefix}');
  print('🚀 Production Mode: ${Config.isProduction ? 'YES' : 'NO'}');
  print('=' * 50);

  final api = ApiService();
  final authService = AuthService(api);
  final transactionService = TransactionService(api);
  final accountService = AccountService(api);

  String? authToken;

  while (true) {
    print('\n📋 Menu principal:');
    print('1. 🔐 Connexion (Initiate Login)');
    print('2. 📝 Inscription');
    print('3. 🔑 Finaliser la connexion (Complete Login)');
    print('4. 💸 Effectuer un transfert');
    print('5. 💳 Effectuer un paiement marchand');
    print('6. 💰 Solde du compte');
    print('7. 📊 Dashboard du compte');
    print('8. 📈 Transactions du compte');
    print('9. 🔍 Statut d\'un paiement');
    print('10. 📋 Historique des paiements');
    print('11. ❌ Annuler une transaction');
    print('0. 🚪 Quitter');

    stdout.write('Votre choix: ');
    String? choice = stdin.readLineSync();

    try {
      switch (choice) {
        case '1':
          await handleInitiateLogin(authService);
          break;
        case '2':
          await handleRegister(authService);
          break;
        case '3':
          await handleCompleteLogin(authService, api);
          break;
        case '4':
          await handleTransfer(transactionService);
          break;
        case '5':
          await handlePaymentByMerchant(transactionService);
          break;
        case '6':
          await handleAccountBalance(accountService);
          break;
        case '7':
          await handleAccountDashboard(accountService);
          break;
        case '8':
          await handleAccountTransactions(accountService);
          break;
        case '9':
          await handlePaymentStatus(transactionService);
          break;
        case '10':
          await handlePaymentHistory(transactionService);
          break;
        case '11':
          await handleCancelTransaction(transactionService);
          break;
        case '0':
          print('👋 Au revoir!');
          return;
        default:
          print('❌ Choix invalide');
      }
    } catch (e) {
      print('❌ Erreur: $e');
    }
  }
}

Future<void> handleInitiateLogin(AuthService authService) async {
  stdout.write('📱 Numéro de téléphone: ');
  String? phone = stdin.readLineSync();

  if (phone == null || phone.isEmpty) {
    print('❌ Numéro de téléphone requis');
    return;
  }

  print('⏳ Initiation de la connexion...');
  final response = await authService.initiateLogin(phone);

  if (response['success'] == true) {
    print('✅ ${response['message']}');

    // Afficher l'OTP de debug si disponible
    if (response.containsKey('debug_otp')) {
      print('🔑 OTP de test: ${response['debug_otp']}');
      print('📧 Email de test: ${response['debug_email']}');
    }
  } else {
    print('❌ ${response['message']}');
  }
}

Future<void> handleRegister(AuthService authService) async {
  stdout.write('👤 Nom complet: ');
  String? name = stdin.readLineSync();

  stdout.write('📧 Email: ');
  String? email = stdin.readLineSync();

  stdout.write('📱 Téléphone: ');
  String? phone = stdin.readLineSync();

  if (name == null ||
      email == null ||
      phone == null ||
      name.isEmpty ||
      email.isEmpty ||
      phone.isEmpty) {
    print('❌ Tous les champs sont requis');
    return;
  }

  print('⏳ Inscription en cours...');
  final response = await authService.register({
    'name': name,
    'email': email,
    'phone': phone,
  });

  if (response['success'] == true) {
    print('✅ ${response['message']}');
  } else {
    print('❌ ${response['message']}');
  }
}

Future<void> handleTransfer(TransactionService transactionService) async {
  stdout.write('🏦 Numéro de compte source: ');
  String? sourceAccount = stdin.readLineSync();

  stdout.write('🏦 Numéro de compte destinataire: ');
  String? destAccount = stdin.readLineSync();

  stdout.write('💰 Montant: ');
  String? amountStr = stdin.readLineSync();

  stdout.write('📝 Description: ');
  String? description = stdin.readLineSync();

  if (sourceAccount == null ||
      destAccount == null ||
      amountStr == null ||
      sourceAccount.isEmpty ||
      destAccount.isEmpty ||
      amountStr.isEmpty) {
    print('❌ Compte source, destinataire et montant requis');
    return;
  }

  double? amount = double.tryParse(amountStr);
  if (amount == null || amount <= 0) {
    print('❌ Montant invalide');
    return;
  }

  print('⏳ Effectuant le transfert...');
  final response = await transactionService.createTransfer(sourceAccount, {
    'recipient_account': destAccount,
    'amount': amount,
    'description': description ?? 'Transfert via console',
  });

  if (response['success'] == true) {
    print('✅ ${response['message']}');
    if (response.containsKey('reference')) {
      print('🔖 Référence: ${response['reference']}');
    }
  } else {
    print('❌ ${response['message']}');
  }
}

Future<void> handlePaymentStatus(TransactionService transactionService) async {
  stdout.write('🔖 Référence de paiement: ');
  String? reference = stdin.readLineSync();

  if (reference == null || reference.isEmpty) {
    print('❌ Référence requise');
    return;
  }

  print('⏳ Vérifiant le statut...');
  final response = await transactionService.checkPaymentStatus({
    'reference': reference,
  });

  if (response['success'] == true) {
    final status = response['data'];
    print('📊 Statut du paiement:');
    print('  🔖 Référence: ${status['reference']}');
    print('  📈 Statut: ${status['status']}');
    print('  💰 Montant: ${status['amount']} ${status['currency']}');
    if (status['message'] != null) {
      print('  📝 Message: ${status['message']}');
    }
  } else {
    print('❌ ${response['message']}');
  }
}

Future<void> handlePaymentHistory(TransactionService transactionService) async {
  print('⏳ Récupération de l\'historique des paiements...');
  final response = await transactionService.getPaymentHistory();

  if (response['success'] == true) {
    final payments = response['data'] as List?;
    if (payments != null && payments.isNotEmpty) {
      print('💳 Historique des paiements:');
      for (var payment in payments) {
        print(
            '  • ${payment['reference']} - ${payment['amount']} ${payment['currency']} - ${payment['status']}');
      }
    } else {
      print('💳 Aucun paiement trouvé');
    }
  } else {
    print('❌ ${response['message']}');
  }
}

Future<void> handleAccountBalance(AccountService accountService) async {
  stdout.write('🏦 Numéro de compte: ');
  String? accountNumber = stdin.readLineSync();

  if (accountNumber == null || accountNumber.isEmpty) {
    print('❌ Numéro de compte requis');
    return;
  }

  print('⏳ Récupération du solde...');
  final response = await accountService.getAccountBalance(accountNumber);

  if (response['success'] == true) {
    final account = response['data'];
    print('💰 Solde du compte:');
    print('  🏦 Compte: ${account['account_number']}');
    print('  💵 Solde: ${account['balance']} ${account['currency']}');
    print('  📊 Statut: ${account['status']}');
  } else {
    print('❌ ${response['message']}');
  }
}

Future<void> handleCompleteLogin(AuthService authService, ApiService api) async {
  stdout.write('📱 Numéro de téléphone: ');
  String? phone = stdin.readLineSync();

  stdout.write('🔑 Code OTP: ');
  String? otp = stdin.readLineSync();

  if (phone == null || otp == null || phone.isEmpty || otp.isEmpty) {
    print('❌ Téléphone et OTP requis');
    return;
  }

  print('⏳ Finalisation de la connexion...');
  final response = await authService.completeLogin(phone, otp);

  if (response['success'] == true) {
    print('✅ ${response['message']}');

    // Extraire et stocker le token
    if (response.containsKey('data') && response['data'].containsKey('token')) {
      final token = response['data']['token'];
      api.setAuthToken(token);
      print('🔑 Token JWT stocké: ${token.substring(0, 20)}...');
    } else {
      print('⚠️ Aucun token trouvé dans la réponse');
    }
  } else {
    print('❌ ${response['message']}');
  }
}

Future<void> handlePaymentByMerchant(TransactionService transactionService) async {
  stdout.write('🏦 Numéro de compte source: ');
  String? accountNumber = stdin.readLineSync();

  stdout.write('🏪 Identifiant marchand: ');
  String? merchantIdentifier = stdin.readLineSync();

  stdout.write('💰 Montant: ');
  String? amountStr = stdin.readLineSync();

  stdout.write('📝 Description: ');
  String? description = stdin.readLineSync();

  if (accountNumber == null || merchantIdentifier == null ||
      amountStr == null ||
      accountNumber.isEmpty || merchantIdentifier.isEmpty ||
      amountStr.isEmpty) {
    print('❌ Compte source, identifiant marchand et montant requis');
    return;
  }

  double? amount = double.tryParse(amountStr);
  if (amount == null || amount <= 0) {
    print('❌ Montant invalide');
    return;
  }

  print('⏳ Initiant le paiement marchand...');
  final response = await transactionService.initiatePaymentToMerchant(
      accountNumber, merchantIdentifier, {
    'amount': amount,
    'description': description ?? 'Paiement marchand via console',
  });

  if (response['success'] == true) {
    print('✅ ${response['message']}');
    if (response.containsKey('transaction_id')) {
      print('🔖 ID Transaction: ${response['transaction_id']}');
    }
    if (response.containsKey('status')) {
      print('📊 Statut: ${response['status']}');
    }
  } else {
    print('❌ ${response['message']}');
  }
}

Future<void> handleAccountDashboard(AccountService accountService) async {
  stdout.write('🏦 Numéro de compte: ');
  String? accountNumber = stdin.readLineSync();

  if (accountNumber == null || accountNumber.isEmpty) {
    print('❌ Numéro de compte requis');
    return;
  }

  print('⏳ Récupération du dashboard...');
  final response = await accountService.getAccountDashboard(accountNumber);

  if (response['success'] == true) {
    final dashboard = response['data'];
    print('📊 Dashboard du compte:');
    print('  🏦 Compte: ${dashboard['account_number']}');
    print('  💵 Solde: ${dashboard['balance']} ${dashboard['currency']}');
    print('  📊 Statut: ${dashboard['status']}');
    print('  📅 Créé le: ${dashboard['created_at']}');
    // Afficher d'autres informations du dashboard si disponibles
  } else {
    print('❌ ${response['message']}');
  }
}

Future<void> handleAccountTransactions(AccountService accountService) async {
  stdout.write('🏦 Numéro de compte: ');
  String? accountNumber = stdin.readLineSync();

  if (accountNumber == null || accountNumber.isEmpty) {
    print('❌ Numéro de compte requis');
    return;
  }

  print('⏳ Récupération des transactions...');
  final response = await accountService.getAccountTransactions(accountNumber);

  if (response['success'] == true) {
    final transactions = response['data'] as List?;
    if (transactions != null && transactions.isNotEmpty) {
      print('📈 Transactions du compte:');
      for (var tx in transactions) {
        print(
            '  • ${tx['reference']} - ${tx['signed_amount']} ${tx['currency']} - ${tx['status']}');
      }
    } else {
      print('📭 Aucune transaction trouvée');
    }
  } else {
    print('❌ ${response['message']}');
  }
}

Future<void> handleCancelTransaction(TransactionService transactionService) async {
  stdout.write('🔖 ID de transaction à annuler: ');
  String? transactionId = stdin.readLineSync();

  if (transactionId == null || transactionId.isEmpty) {
    print('❌ ID de transaction requis');
    return;
  }

  print('⏳ Annulation de la transaction...');
  final response = await transactionService.cancelTransaction(transactionId);

  if (response['success'] == true) {
    print('✅ ${response['message']}');
  } else {
    print('❌ ${response['message']}');
  }
}

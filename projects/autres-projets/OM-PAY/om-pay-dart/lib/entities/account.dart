class Account {
  final int id;
  final String accountNumber;
  final String userId;
  final double balance;
  final String currency;
  final String status;
  final DateTime createdAt;
  final DateTime? updatedAt;

  Account({
    required this.id,
    required this.accountNumber,
    required this.userId,
    required this.balance,
    required this.currency,
    required this.status,
    required this.createdAt,
    this.updatedAt,
  });

  factory Account.fromJson(Map<String, dynamic> json) {
    return Account(
      id: json['id'] ?? 0,
      accountNumber: json['account_number'] ?? '',
      userId: json['user_id'] ?? '',
      balance: (json['balance'] ?? 0.0).toDouble(),
      currency: json['currency'] ?? 'XOF',
      status: json['status'] ?? 'active',
      createdAt: DateTime.parse(json['created_at'] ?? DateTime.now().toIso8601String()),
      updatedAt: json['updated_at'] != null ? DateTime.parse(json['updated_at']) : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'account_number': accountNumber,
      'user_id': userId,
      'balance': balance,
      'currency': currency,
      'status': status,
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt?.toIso8601String(),
    };
  }

  @override
  String toString() {
    return 'Account{id: $id, accountNumber: $accountNumber, balance: $balance $currency, status: $status}';
  }
}
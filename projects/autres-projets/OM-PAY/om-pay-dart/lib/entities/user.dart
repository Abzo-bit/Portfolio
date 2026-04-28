class User {
  final int id;
  final String name;
  final String email;
  final String phone;
  final String accountNumber;
  final double balance;
  final String currency;
  final String status;
  final DateTime createdAt;

  User({
    required this.id,
    required this.name,
    required this.email,
    required this.phone,
    required this.accountNumber,
    required this.balance,
    required this.currency,
    required this.status,
    required this.createdAt,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'] ?? 0,
      name: json['name'] ?? '',
      email: json['email'] ?? '',
      phone: json['phone'] ?? '',
      accountNumber: json['account_number'] ?? '',
      balance: (json['balance'] ?? 0.0).toDouble(),
      currency: json['currency'] ?? 'XOF',
      status: json['status'] ?? 'active',
      createdAt: DateTime.parse(json['created_at'] ?? DateTime.now().toIso8601String()),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'phone': phone,
      'account_number': accountNumber,
      'balance': balance,
      'currency': currency,
      'status': status,
      'created_at': createdAt.toIso8601String(),
    };
  }

  @override
  String toString() {
    return 'User{id: $id, name: $name, email: $email, phone: $phone, accountNumber: $accountNumber, balance: $balance $currency, status: $status}';
  }
}
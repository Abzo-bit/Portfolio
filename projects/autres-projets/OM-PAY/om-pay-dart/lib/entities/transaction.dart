class Transaction {
  final int id;
  final String reference;
  final String type;
  final String status;
  final double amount;
  final String currency;
  final String description;
  final String senderAccount;
  final String receiverAccount;
  final DateTime createdAt;
  final DateTime? updatedAt;

  Transaction({
    required this.id,
    required this.reference,
    required this.type,
    required this.status,
    required this.amount,
    required this.currency,
    required this.description,
    required this.senderAccount,
    required this.receiverAccount,
    required this.createdAt,
    this.updatedAt,
  });

  factory Transaction.fromJson(Map<String, dynamic> json) {
    return Transaction(
      id: json['id'] ?? 0,
      reference: json['reference'] ?? '',
      type: json['type'] ?? '',
      status: json['status'] ?? 'pending',
      amount: (json['amount'] ?? 0.0).toDouble(),
      currency: json['currency'] ?? 'XOF',
      description: json['description'] ?? '',
      senderAccount: json['sender_account'] ?? '',
      receiverAccount: json['receiver_account'] ?? '',
      createdAt: DateTime.parse(json['created_at'] ?? DateTime.now().toIso8601String()),
      updatedAt: json['updated_at'] != null ? DateTime.parse(json['updated_at']) : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'reference': reference,
      'type': type,
      'status': status,
      'amount': amount,
      'currency': currency,
      'description': description,
      'sender_account': senderAccount,
      'receiver_account': receiverAccount,
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt?.toIso8601String(),
    };
  }

  @override
  String toString() {
    return 'Transaction{id: $id, reference: $reference, type: $type, status: $status, amount: $amount $currency, description: $description}';
  }
}
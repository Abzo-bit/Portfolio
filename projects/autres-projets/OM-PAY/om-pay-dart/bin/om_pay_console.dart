import 'main.dart' as app;

// Petit wrapper pour permettre `dart run` sans argument
Future<void> main(List<String> args) async {
  await app.main();
}
